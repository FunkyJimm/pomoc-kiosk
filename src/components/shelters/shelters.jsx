import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Map from '../map/map';

import Finder from '../../helpers/finder';
import PomocApi from '../../helpers/pomoc-api';

import './shelters.scss';

const Shelters = ({ onScreen }) => {
  const [shelters, setShelters] = useState();
  const [closestShelters, setClosestShelters] = useState();
  const [index, setIndex] = useState(1);

  const finder = new Finder();
  const pomocApi = new PomocApi('shelters');

  useEffect(() => {
    if (!shelters) {
      pomocApi.getData(setShelters);
    } else {
      const sheltersWithAFreeBeds = finder.findSheltersWithAFreeBeds(shelters.data);
      if (sheltersWithAFreeBeds) {
        setClosestShelters(finder.findClosestLocation(sheltersWithAFreeBeds));
      }
    }
  }, [shelters]);

  const handleFindOther = itemsLength => {
    if (index <= itemsLength - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div className="shelters__container">
      <Container>
        <Row>
          <h1>Schroniska</h1>
        </Row>
        <Row>
          { closestShelters ? 
            <p>Najbliższe schronisko to: <b>{closestShelters[index].name}</b></p> : 
            <p>Przykro nam ale nie znaleziono żadnego wolnego schroniska :(</p> 
          }
        </Row>
        <Row>
          <div className="shelters__container-map">
            { closestShelters && <Map locations={closestShelters} index={index} /> }
          </div>
        </Row>
        <Row>
          <button onClick={() => handleFindOther(closestShelters.length)}>Znajdź inne schronisko</button>
        </Row>
        <Row>
          <button onClick={() => onScreen('main-menu')}>Powrót</button>
        </Row>
      </Container>
    </div>
  )
}

export default Shelters;