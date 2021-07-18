import React, { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./StoreReducer";

const StoreContext = createContext({});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };
export default StoreContext;
