import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  useMapEvents,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/EnergyBlastMap.scss";

const EnergyBlastMap = ({ coords, blastRadius }) => {
  const [clickPosition, setClickPosition] = useState(null);

  const handleMapClick = (e) => {
    setClickPosition(e.latlng);
  };

  //TODO Take it out into a new file and import Circle and Popup there
  const drawCircles = (...diameters) => {
    const colors = ["red", "green", "purple"];
    return diameters.map((diameter, index) => (
      <Circle
        key={index}
        center={[clickPosition.lat, clickPosition.lng]}
        radius={diameter}
        color={colors[index % colors.length]} // Use modulo to cycle through colors
      >
        <Popup>
          This is a circle with a radius of {diameter.toFixed()} meters.
        </Popup>
      </Circle>
    ));
  };

  return (
    <div
      className="map-style-container"
      style={{ height: "450px", paddingLeft: "5%" }}
    >
      <div className="close-container">
        <p>
          <span>Click</span> anywhere on the map to show the blast radius
        </p>
      </div>
      <MapContainer
        className="leaflet-map"
        center={[coords?.latitude || 49.13444, coords?.longitude || 10.07193]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {clickPosition && <>{drawCircles(blastRadius)}</>}

        <MapClickHandler onMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
};

const MapClickHandler = ({ onMapClick }) => {
  const map = useMapEvents({
    click: onMapClick,
  });

  return null; // This component doesn't render anything, it's just for handling map events.
};

export default EnergyBlastMap;
