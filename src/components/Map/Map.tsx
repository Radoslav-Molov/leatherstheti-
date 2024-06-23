import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CustomMarker from "./CustomMarker";

export default function Map() {
  return (
    <MapContainer
      center={[41.499176, 26.105995]}
      zoom={17}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "50vh",
        margin: " auto",
        boxShadow: "lightgray 0px -9px 13px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <CustomMarker position={[41.499176, 26.105995]}>
        {/* <Popup>This is a popup</Popup> */}
      </CustomMarker>
    </MapContainer>
  );
}
