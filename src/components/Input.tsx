import React, { ChangeEvent, useContext, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import StoreContext from "../store/StoreProvider";
import "../styles/Input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [ip, setIp] = useState({});
  const [store, dispatch] = useContext(StoreContext);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    fetch(`https://ipapi.co/${value}/json/`)
      .then((response) => response.json())
      .then((data) => setIp(data))
      .then(() => console.log(ip));
  };

  return (
    <div className="info-container">
      <div className="input-container">
        <input
          className="input"
          type="ip"
          placeholder="Your IP"
          onChange={handleChangeInputValue}
        />
        <button onClick={handleClick} className="input-btn">
          {" "}
          <FaLocationArrow />{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
