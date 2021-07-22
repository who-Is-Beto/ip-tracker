/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { StoreContext } from "../store/Context";
import "../styles/Input.css";
import { EActions } from "../types/enums";
import { fetchData } from "../utils/getData";

const Input = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(StoreContext);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    const ipData = await fetchData(value);
    dispatch({
      type: EActions.GET_IP,
      payload: ipData,
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="info-container">
      <div className="input-container">
        <input
          className="input"
          type="ip"
          value={value}
          placeholder="Your IP"
          onChange={handleChangeInputValue}
        />
        <button onClick={handleClick} className="input-btn">
          {" "}
          <FaLocationArrow className="btn-icon" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
