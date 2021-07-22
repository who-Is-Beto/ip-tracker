import Data from "./components/Data";
import Input from "./components/Input";
import Map from "./components/Map";
import { useQuery } from "react-query";
import { StoreContext, StoreProvider } from "./store/Context";
import { fetchData } from "./utils/getData";
import { useContext } from "react";
import { EActions } from "./types/enums";

function App() {
  const { dispatch } = useContext(StoreContext);

  const { isLoading, error } = useQuery("InitialFetch", () => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then(async (data) => {
        const ipData = await fetchData(data.ip);
        dispatch({
          type: EActions.GET_IP,
          payload: ipData,
        });
        return ipData;
      });
  });

  return (
    <StoreProvider>
      {error && <h1>An error occurred</h1>}
      <div className="app">
        {isLoading ? (
          <h1>LOADING...</h1>
        ) : (
          <>
            <div className="content">
              <h2>IP Adress Tracker</h2>
              <Input />
              <Data />
            </div>
            <Map />
          </>
        )}
      </div>
    </StoreProvider>
  );
}

export default App;
