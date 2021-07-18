import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
  bottom: "0rem",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAmcEWw0e7tn-vXuuOpOYn1L457GBe4OtY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

export default React.memo(MyComponent);
