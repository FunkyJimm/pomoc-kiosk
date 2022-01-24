import { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

import PomocApi from '../../helpers/pomoc-api';

import './informations.scss';

const informationsList = informations => {
  return (
    informations.map((information, index) => (
      <tr key={information.id || information._id}>
        <td>{index + 1}</td>
        <td>{information.title}</td>
        <td>{information.description}</td>
      </tr>
    ))
  )
}

const Informations = ({ onScreen }) => {
  const [informations, setInformations] = useState();

  const pomocApi = new PomocApi('informations');

  useEffect(() => {
    pomocApi.getData(setInformations);
  }, []);

  if (informations) {
    return (
      <div className="informations__container">
        <Container>
          <Row>
            <h1>Informacje</h1>
          </Row>
          <Row>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Informacja</th>
                  <th>Treść</th>
                </tr>
              </thead>
              <tbody>
                {informationsList(informations.data)}
              </tbody>
            </Table>
          </Row>
          <Row>
            <button onClick={() => onScreen('main-menu')}>Powrót</button>
          </Row>
        </Container>
      </div>
    )
  } else {
    return (
      <div className="informations__container">
        <Container>
          <Row>
            <h1>Informacje</h1>
          </Row>
          <Row>
            <p>Nie ma aktualnych informacji...</p>
          </Row>
          <Row>
            <button onClick={() => onScreen('main-menu')}>Powrót</button>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Informations;