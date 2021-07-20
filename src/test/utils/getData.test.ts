import fetch from "node-fetch";
import { mocked } from "ts-jest/utils";
import { fetchData } from "../../utils/getData";

jest.mock("node-fetch", () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

describe("Fetch Ip API", () => {
  test("Get data from Ip API", async () => {
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve({
            ip: "8.8.8.8",
            version: "IPv4",
            city: "Mountain View",
            region: "California",
            region_code: "CA",
            country: "US",
            country_name: "United States",
            country_code: "US",
            country_code_iso3: "USA",
            country_capital: "Washington",
            country_tld: ".us",
            continent_code: "NA",
            in_eu: false,
            postal: "Sign up to access",
            latitude: "Sign up to access",
            longitude: "Sign up to access",
            timezone: "America/Los_Angeles",
            utc_offset: "-0700",
            country_calling_code: "+1",
            currency: "USD",
            currency_name: "Dollar",
            languages: "en-US,es-US,haw,fr",
            country_area: 9629091.0,
            country_population: 327167434.0,
            message: "Please message us at ipapi.co/trial for full access",
            asn: "AS15169",
            org: "GOOGLE",
          });
        },
      });
    });

    const ip = await fetchData("8.8.8.8");
    expect(mocked(fetch).mock.calls.length).toBe(1);
    expect(ip).toBeDefined();
    expect(ip).toStrictEqual({
      ip: "8.8.8.8",
      version: "IPv4",
      city: "Mountain View",
      region: "California",
      region_code: "CA",
      country: "US",
      country_name: "United States",
      country_code: "US",
      country_code_iso3: "USA",
      country_capital: "Washington",
      country_tld: ".us",
      continent_code: "NA",
      in_eu: false,
      postal: "Sign up to access",
      latitude: "Sign up to access",
      longitude: "Sign up to access",
      timezone: "America/Los_Angeles",
      utc_offset: "-0700",
      country_calling_code: "+1",
      currency: "USD",
      currency_name: "Dollar",
      languages: "en-US,es-US,haw,fr",
      country_area: 9629091.0,
      country_population: 327167434.0,
      message: "Please message us at ipapi.co/trial for full access",
      asn: "AS15169",
      org: "GOOGLE",
    });
  });
});
