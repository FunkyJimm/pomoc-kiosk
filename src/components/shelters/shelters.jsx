import { Container, Row } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './shelters.scss';

const mapStyles = {
  width: '50vw',
  height: '50vh',
};

const Shelters = ({ onScreen }) => {
  return (
    <div className="shelters__container">
      <Container>
        <Row>
          <h1>Schroniska</h1>
        </Row>
        <Row>
          <p>Informacja</p>
        </Row>
        <Row>
          <div className="shelters__container-map">
            <MapContainer center={[50.21, 19.00]} zoom={13} style={mapStyles} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[50.2, 19.00]}>
                <Popup>
                  Trolololo
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </Row>
        <Row>
          <button onClick={() => onScreen('main-menu')}>Powrót</button>
        </Row>
      </Container>
    </div>
  )
}

export default Shelters;