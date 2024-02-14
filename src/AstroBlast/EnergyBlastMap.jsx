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
import useIsMobileView from "../helpers/hooks/useIsMobileView";

/**
 *
 * Interactive Map
 * Map displayed with the help of React-leaflet
 * Onclick it paints a circle thats the size of the blast radius
 */

const EnergyBlastMap = ({ coords, blastRadius }) => {
  const isMobileView = useIsMobileView();
  const [clickPosition, setClickPosition] = useState(null);

  const handleMapClick = (e) => {
    setClickPosition(e.latlng);
  };

  //For now only draw the blast radius circle, but it can handle more diameters and it returns
  //a circle of a different color for each of the diameters
  const drawCircles = (...diameters) => {
    const colors = ["red", "green", "purple"];
    return diameters.map((diameter, index) => (
      <Circle
        key={index}
        center={[clickPosition.lat, clickPosition.lng]}
        radius={diameter}
        color={colors[index % colors.length]} // Use remainder operator to cycle through colors
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
      style={{ height: "450px", paddingLeft: `${isMobileView ? "0" : "5%"}` }}
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
