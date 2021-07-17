import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  marginTop: "9rem",
  height: "70vh",
  bottom: "12rem",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAURnOaOYddeIl841bzX7lkZS7BlDNqu7s">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

export default React.memo(MyComponent);
