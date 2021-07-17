import { FaLocationArrow } from "react-icons/fa";
import "../styles/Input.css";

const Input = () => {
  return (
    <div className="info-container">
      <div className="input-container">
        <input type="ip" placeholder="Your IP" />
        <button className="input-btn">
          {" "}
          <FaLocationArrow />{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
