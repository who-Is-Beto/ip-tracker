import Data from "./components/Data";
import Input from "./components/Input";
import Map from "./components/Map";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
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
  );
}

export default App;
