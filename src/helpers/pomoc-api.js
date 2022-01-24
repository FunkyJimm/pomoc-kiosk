const API_URL = 'http://localhost:3000';

class PomocApi {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getData = setState => {
    fetch(`${API_URL}/${this.endpoint}`)
    .then(res => res.json())
    .then(data => setState(data),
    (error) => {
      console.log(error);
    })
    .catch(err => console.log(err));
  }
}

export default PomocApi;
