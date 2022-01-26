import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const mapStyles = {
  width: '100vw',
  height: '50vh',
};

const Map = ({ locations, index }) => {
  const { name, coordinates } = locations[index];
  
  const [map, setMap] = useState(null);
  
  useEffect(() => {
    if (map) {
      map.setView([coordinates.lat, coordinates.lon]);
    }
  }, [index]);

  return (
    <MapContainer 
      center={[coordinates.lat, coordinates.lon]} 
      zoom={13} 
      style={mapStyles} 
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat, coordinates.lon]}>
        <Popup>
          {name}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;