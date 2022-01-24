import Config from '../config/config';

const API_URL = 'http://api.openweathermap.org/data/2.5/';

class WeatherApi {
  constructor(location) {
    this.location = location;
  }

  getWeather = setState => {
    fetch(API_URL + '/weather?q=' + this.location + '&appid=' + Config.API_KEY + '&units=metric')
    .then(res => res.json())
    .then(weather => setState(weather))
    .catch(err => console.log(err));
  }
}

export default WeatherApi