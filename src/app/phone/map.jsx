"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const coords = {
  Libya: [26.3351, 17.2283],
  "United States": [37.0902, -95.7129],
  "United Kingdom": [55.3781, -3.4360],
  France: [46.2276, 2.2137],
  Germany: [51.1657, 10.4515],
};

export default function Map({ country }) {
  const center = coords[country] || [20, 0];

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>{country}</Popup>
      </Marker>
    </MapContainer>
  );
}
