import React, { useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { StoreContext } from "../store/Context";

const containerStyle = {
  width: "100%",
  height: "70vh",
  bottom: "0rem",
};

function MyComponent() {
  const { state } = useContext(StoreContext);

  const center = {
    lat: state.ip.location.lat,
    lng: state.ip.location.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAmcEWw0e7tn-vXuuOpOYn1L457GBe4OtY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
