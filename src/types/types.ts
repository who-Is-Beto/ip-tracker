import { EActions } from "./enums";

export type IpType = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: number;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
  proxy: {
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
  };
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
    location: {
      country: string;
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: number;
      geonameId: number;
    };
    domains: [string, string, string, string, string];
    as: {
      asn: number;
      name: string;
      route: string;
      domain: string;
      type: string;
    };
    isp: string;
    proxy: {
      proxy: boolean;
      vpn: boolean;
      tor: boolean;
    };
  };
};

export type ipActions =
  ActionMap<ipPayloadType>[keyof ActionMap<ipPayloadType>];
