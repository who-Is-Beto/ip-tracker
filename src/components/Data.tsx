import "../styles/Data.css";

const Data = () => {
  return (
    <div className="data-container">
      <div className="data-info">
        <small>Ip address</small>
        <h4>225.225.225</h4>
      </div>
      <div className="data-info">
        <small>Location</small>
        <h4>Mexico City</h4>
      </div>
      <div className="data-info">
        <small>Time zone</small>
        <h4>UTC-5:00</h4>
      </div>
      <div className="data-info">
        <small>ISP</small>
        <h4>Google</h4>
      </div>
    </div>
  );
};

export default Data;
