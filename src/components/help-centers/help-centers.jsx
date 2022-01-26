import { useEffect, useState } from 'react';
import { Accordion, Container, Row, Table } from 'react-bootstrap';

import PomocApi from '../../helpers/pomoc-api';

import './help-centers.scss';

const helpCentersList = helpcenters => {
  return (
    helpcenters.map((helpcenter, index) => (
      <tr key={helpcenter.id || helpcenter._id}>
        <td>{index + 1}</td>
        <td>{helpcenter.name}</td>
        <td>{helpcenter.address}</td>
        <td>{helpcenter.city}</td>
        <td>{helpcenter.zipCode}</td>
        <td>{helpcenter.phone}</td>
        <td>{helpcenter.description}</td>
      </tr>
    ))
  )
}

const HelpCenters = ({ onScreen }) => {
  const [helpcenters, setHelpCenters] = useState();

  const pomocApi = new PomocApi('helpcenter');

  useEffect(() => {
    pomocApi.getData(setHelpCenters);
  }, []);

  return (
    <div className="helpcenters__container">
      <Container>
        <Row>
          <h1>Ośrodki pomocy</h1>
        </Row>
        <Row>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Nazwa</th>
                <th>Adres</th>
                <th>Miasto</th>
                <th>Kod-pocztowy</th>
                <th>Telefon</th>
                <th>Opis</th>
              </tr>
            </thead>
            <tbody>
              { helpcenters && helpCentersList(helpcenters.data) }
            </tbody>
          </Table>
        </Row>
        <Row>
          <button onClick={() => onScreen('main-menu')}>Powrót</button>
        </Row>
      </Container>
    </div>
  )
}

export default HelpCenters;