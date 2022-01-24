import { Container, Row, Table } from "react-bootstrap";

import './contacts.scss';

const Contacts = ({ onScreen }) => {
  return (
    <div className="contacts__container">
      <Container>
        <Row>
          <h1>Zadzwoń po pomoc</h1>
        </Row>
        <Row>
          <p>W tym miejscu możesz zadzwonić pod jeden z dostępnych numerów, w celu otrzymania pomocy.</p>
        </Row>
        <Row>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Telefon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Policja:</td>
                <td><a href="tel:997">997</a></td>
              </tr>
              <tr>
                <td>Straż pożarna:</td>
                <td><a href="tel:998">998</a></td>
              </tr>
              <tr>
                <td>Pogotowie ratunkowe:</td>
                <td><a href="tel:999">999</a></td>
              </tr>
              <tr>
                <td>Straż miejska:</td>
                <td><a href="tel:986">986</a></td>
              </tr>
              <tr>
                <td>Telefon zaufania dla dzieci i młodzieży:</td>
                <td><a href="tel:116-111">116-111</a></td>
              </tr>
              <tr>
                <td>Kryzysowy Telefon Zaufania:</td>
                <td><a href="tel:116-123">116-123</a></td>
              </tr>
              <tr>
                <td>Centrum Wsparcia psychicznego (ITAKA):</td>
                <td><a href="tel:800-702-222">800-702-222</a></td>
              </tr>
              <tr>
                <td>Niebieska Linia dla osób dotkniętych przemocą domową:</td>
                <td><a href="tel:22-668-70-00">22-668-70-00</a></td>
              </tr>
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

export default Contacts;