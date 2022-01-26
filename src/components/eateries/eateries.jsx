import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Map from '../map/map';

import Finder from '../../helpers/finder';
import PomocApi from '../../helpers/pomoc-api';

import './eateries.scss';

const Eateries = ({ onScreen }) => {
  const [eateries, setEateries] = useState();
  const [closestEateries, setClosestEateries] = useState();
  const [index, setIndex] = useState(0);

  const finder = new Finder();
  const pomocApi = new PomocApi('eatery');

  useEffect(() => {
    if (!eateries) {
      pomocApi.getData(setEateries);
    } else {
      const eateriesWithAvailabilityMeals = finder.findEateriesWithAvailabilityMeals(eateries.data);
      if (eateriesWithAvailabilityMeals) {
        setClosestEateries(finder.findClosestLocation(eateriesWithAvailabilityMeals));
      }
    }
  }, [eateries]);

  const handleFindOther = itemsLength => {
    if (index < itemsLength - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div className="eateries__container">
      <Container>
        <Row>
          <h1>Jadłodajnie</h1>
        </Row>
        <Row>
          { closestEateries ? 
            <p>Najbliższy posiłek dostępny jest w: <b>{closestEateries[index].name}</b></p> : 
            <p>Przykro nam ale nie znaleziono żadnego posiłku :(</p> 
          }
        </Row>
        <Row>
          <div className="eateries__container-map">
            { closestEateries && <Map locations={closestEateries} index={index} /> }
          </div>
        </Row>
        <Row>
          <button onClick={() => handleFindOther(closestEateries.length)}>Znajdź inną jadłodajnie</button>
        </Row>
        <Row>
          <button onClick={() => onScreen('main-menu')}>Powrót</button>
        </Row>
      </Container>
    </div>
  )
}

export default Eateries;