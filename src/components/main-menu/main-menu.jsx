import { Container, Row } from "react-bootstrap";

const MainMenu = () => {
  
  return (
    <div className="main-menu__container">
      <Container>
        <Row>
          <h1>Pomoc dla bezdomnego</h1>
          <h2>Wersja alpha 0.1</h2>
        </Row>
        <Row>
          Kontent...
        </Row>
        <Row>
          <p>Pomoc dla bezdomnego. BPL Team 2022, all rights reserved.</p>
        </Row>
      </Container>
    </div>
  )
}

export default MainMenu;