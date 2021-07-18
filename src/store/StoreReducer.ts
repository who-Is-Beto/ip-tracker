import { IInitialState, IIpActions } from "../types/interfaces";

enum ActionTypes {
  FETCH_IP,
}

const initialState: IInitialState = {
  ip: {
    ip: "",
    version: "",
    city: "",
    region: "",
    region_code: "",
    country: "",
    country_name: "",
    country_code: "",
    country_code_iso3: "",
    country_capital: "",
    country_tld: "",
    continent_code: "",
    in_eu: false,
    postal: "",
    latitude: "",
    longitude: "",
    timezone: "",
    utc_offset: "",
    country_calling_code: "",
    currency: "",
    currency_name: "",
    languages: "",
    countryArea: NaN,
    countryPopulation: NaN,
    message: "",
    asn: "",
    org: "",
  },
};

const storeReducer = (store: IInitialState, action: IIpActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_IP:
      return {
        ...store,
        ip: action.payload,
      };
    default:
      return {
        ...store,
      };
  }
};

export { initialState, ActionTypes };
export default storeReducer;
