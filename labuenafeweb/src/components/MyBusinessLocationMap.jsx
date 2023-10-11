import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const redPinIcon = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  fillColor: "red",
  fillOpacity: 1,
  strokeWeight: 0,
  scale: 2,
};

function MyBusinessLocationMap({ latitud, longitud }) {
  const center = {
    lat: latitud,
    lng: longitud,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyANNZeyaKBea9WBJb5Oc07E9n15PIqoQQE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={center} icon={redPinIcon} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyBusinessLocationMap;
