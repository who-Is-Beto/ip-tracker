import { ActionTypes } from "../store/StoreReducer";

export interface IIpActions {
  type: ActionTypes.FETCH_IP;
  payload: IIp;
}

export type IpActions = ActionTypes.FETCH_IP;

export interface IIp {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: string;
  longitude: string;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  countryArea: number;
  countryPopulation: number;
  message: string;
  asn: string;
  org: string;
}

export interface IInitialState {
  ip: IIp;
}
