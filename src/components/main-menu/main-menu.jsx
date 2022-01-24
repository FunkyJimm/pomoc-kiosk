import { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";

import WeatherApi from "../../helpers/weather-api";

import './main-menu.scss';

const MainMenu = () => {
  const [weather, setWeather] = useState();
  
  const weatherApi = new WeatherApi('katowice');

  useEffect(() => {
    weatherApi.getWeather(setWeather);
  }, []);

  const weatherInfo = () => {
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
            {weatherInfo()}
          </div>
        </Row>
        <Row>
          <div className="main-menu__container-buttons">
            <button>Znajdź schronienie</button>
            <button>Znajdź posiłek</button>
            <button>Znajdź pomoc</button>
            <button>Informacje</button>
            <button>Numery alarmowe</button>
          </div>
        </Row>
        <Row>
          <div className="main-menu__container-info">
            <p>Treść informacji</p>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default MainMenu;