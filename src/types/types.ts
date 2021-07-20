import { EActions } from "./enums";

export type IpType = {
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
};

export type InitialStateType = {
  ip: IpType | any;
};

export type ActionTypesType = {
  type: EActions;
  payload: IpType;
};

export type ActionMap<M extends { [index: string]: any }> = {
  [key in keyof M]: M[key] extends undefined
    ? {
        type: key;
      }
    : {
        type: key;
        payload: M[key];
      };
};

export type ipPayloadType = {
  [EActions.GET_IP]: {
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
  };
};

export type ipActions =
  ActionMap<ipPayloadType>[keyof ActionMap<ipPayloadType>];
