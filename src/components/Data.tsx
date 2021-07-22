import { useContext } from "react";
import { StoreContext } from "../store/Context";
import "../styles/Data.css";

const Data = () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="data-container">
      <div className="data-info">
        <small>Ip address</small>
        <h4>{state.ip.ip}</h4>
      </div>
      <div className="data-info">
        <small>Location</small>
        <h4>{state.ip.location.region}</h4>
      </div>
      <div className="data-info">
        <small>Time zone</small>
        <h4>{`UTC 
        ${state.ip.location.timezone}`}</h4>
      </div>
      <div className="data-info">
        <small>ISP</small>
        <h4>{state.ip.isp}</h4>
      </div>
    </div>
  );
};

export default Data;
