import { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";

import WeatherApi from "../../helpers/weather-api";
import PomocApi from '../../helpers/pomoc-api';

import './main-menu.scss';

const informationsBar = informations => {
  let text = '';

  for (let index in informations) {
    text = text.concat(informations[index].description, ' | ');
  }

  return text.slice(0, -3);
}

const MainMenu = ({ onScreen }) => {
  const [weather, setWeather] = useState();
  const [informations, setInformations] = useState();
  
  const weatherApi = new WeatherApi('katowice');
  const pomocApi = new PomocApi('informations');

  useEffect(() => {
    weatherApi.getWeather(setWeather);
    pomocApi.getData(setInformations);
  }, []);

  const weatherInfo = weather => {
    if (weather) {
      const { main } = weather;
      
      let warningMessage = '';
      let warningTextColor = '';
      if (main.temp < 10 && main.temp > 0) {
        warningMessage = 'Dzisiaj w nocy będzie chłodno. Prosimy zachować ostrożność.';
        warningTextColor = '#000';
      } else if (main.temp < 0 && main.temp > -10) {
        warningMessage = 'Dzisiaj w nocy będzie zimno. Powinieneś poszukać pomocy!';
        warningTextColor = '#ffff00';
      } else if (main.temp < -10) {
        warningMessage = 'Dzisiaj w nocy będzie bardzo zimno. Natychmiast szukaj schronienia!!!';
        warningTextColor = '#ff0000';
      }

      return (
        <>
          <p>Aktualna temperatura na zewnątrz: {Math.round(main.temp)}*C</p>
          <p style={{ color: warningTextColor }}>{warningMessage}</p>
        </>
      )
    } else {
      return (
        <p>Pogoda aktualnie jest niedostępna...</p>
      )
    }
  }

  return (
    <div className="main-menu__container">
      <Container>
        <Row>
          <h1>Pomoc dla bezdomnego</h1>
          <h2>Wersja alpha 0.1</h2>
        </Row>
        <Row>
          <div className="main-menu__container-weather">
            {weather && weatherInfo(weather)}
          </div>
        </Row>
        <Row>
          <div className="main-menu__container-buttons">
            <button onClick={() => onScreen('shelters')}>Znajdź schronienie</button>
            <button onClick={() => onScreen('eateries')}>Znajdź posiłek</button>
            <button onClick={() => onScreen('helpcenters')}>Znajdź pomoc</button>
            <button onClick={() => onScreen('informations')}>Informacje</button>
            <button onClick={() => onScreen('contacts')}>Numery alarmowe</button>
          </div>
        </Row>
        <Row>
          <div className="main-menu__container-info">
            <marquee loop="-1" scrollamount="10">{informations ? informationsBar(informations.data) : "Nie ma aktualnych informacji..."}</marquee>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default MainMenu;