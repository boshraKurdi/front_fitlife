import "./GetMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import location from '../../../img/location.png'
export default function GetMap({ data }) {
  const customIcon = new L.Icon({
    iconUrl: {location},
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  return (
    <>
    {data ?
      <MapContainer
      center={[data && data.lat, data && data.lon]}
      zoom={15}
      style={{ height: "400px", width: "100%" , margin:'2rem auto' , zIndex: '1' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[data && data.lat, data && data.lon]} icon={customIcon}>
        <Popup>{data && data.address}</Popup>
      </Marker>
    </MapContainer>
      : 'loading'}
    </>
  );
}
