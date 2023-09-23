import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  const [map, setMap] = useState(null);
    console.log(map);
  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={13}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <Marker position={[38.9072,-77.0369]}>

        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;