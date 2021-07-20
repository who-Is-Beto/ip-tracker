import Data from "./components/Data";
import Input from "./components/Input";
import Map from "./components/Map";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider } from "./store/Context";

const queryClient = new QueryClient();

function App() {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <div className="content">
            <h2>IP Adress Tracker</h2>
            <Input />
            <Data />
          </div>
          <Map />
        </div>
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
