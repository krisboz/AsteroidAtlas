import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const EnergyBlastMap = ({ coords }) => {
  const [clickPosition, setClickPosition] = useState(null);
  const colors = ["red", "green", "purple"];

  const handleMapClick = (e) => {
    setClickPosition(e.latlng);
  };

  return (
    <MapContainer
      className="leaflet-map"
      center={[coords?.latitude || 45.813051, coords?.longitude || 15.9773]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {clickPosition && (
        <>
          {[6000, 4000, 2000].map((radius, index) => (
            <Circle
              key={index}
              center={[clickPosition.lat, clickPosition.lng]}
              radius={radius}
              color={colors[index % colors.length]} // Use modulo to cycle through colors
            >
              <Popup>This is a circle with a radius of {radius} meters.</Popup>
            </Circle>
          ))}
        </>
      )}

      <MapClickHandler onMapClick={handleMapClick} />
    </MapContainer>
  );
};

const MapClickHandler = ({ onMapClick }) => {
  const map = useMapEvents({
    click: onMapClick,
  });

  return null; // This component doesn't render anything, it's just for handling map events.
};

export default EnergyBlastMap;
