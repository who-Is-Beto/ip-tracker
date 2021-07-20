import React, { ChangeEvent, useContext, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { StoreContext } from "../store/Context";
import "../styles/Input.css";
import { EActions } from "../types/enums";

const Input = () => {
  const [value, setValue] = useState("");
  const [ip, setIp] = useState({
    ip: "",
    version: "",
    city: "",
    region: "",
    region_code: "",
    country: "",
    country_name: "",
    country_code: "",
    country_code_iso3: "",
    country_capital: "",
    country_tld: "",
    continent_code: "",
    in_eu: false,
    postal: "",
    latitude: "",
    longitude: "",
    timezone: "",
    utc_offset: "",
    country_calling_code: "",
    currency: "",
    currency_name: "",
    languages: "",
    countryArea: NaN,
    countryPopulation: NaN,
    message: "",
    asn: "",
    org: "",
  });
  const { state, dispatch } = useContext(StoreContext);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    fetch(`https://ipapi.co/${value}/json/`)
      .then((response) => response.json())
      .then((data) => setIp(data))
      .then(() =>
        dispatch({
          type: EActions.GET_IP,
          payload: ip,
        })
      );
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
