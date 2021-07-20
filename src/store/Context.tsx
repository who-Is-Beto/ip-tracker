import React, { createContext, useReducer } from "react";
import { EActions } from "../types/enums";
import { ActionTypesType, InitialStateType, ipActions } from "../types/types";

const initialState = {
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

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<ipActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const StoreReducer: React.Reducer<InitialStateType, ActionTypesType> = (
  state,
  action
) => {
  switch (action.type) {
    case EActions.GET_IP:
      return {
        ...state,
        ip: action.payload,
      };
  }
};

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
