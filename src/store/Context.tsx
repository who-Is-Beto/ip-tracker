import React, { createContext, useReducer } from "react";
import { EActions } from "../types/enums";
import { ActionTypesType, InitialStateType, ipActions } from "../types/types";

const initialState = {
  ip: {
    ip: "8.8.8.8",
    location: {
      country: "",
      region: "",
      city: "",
      lat: NaN,
      lng: NaN,
      postalCode: "",
      timezone: NaN,
      geonameId: NaN,
    },
    domains: ["", "", "", "", ""],
    as: {
      asn: NaN,
      name: "",
      route: "",
      domain: "",
      type: "",
    },
    isp: "",
    proxy: {
      proxy: false,
      vpn: false,
      tor: false,
    },
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
