import { Col, Container, Row } from "react-bootstrap";

function SideBar() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8} md={8} className="centered">
            <h2>Ciao</h2>
            <p>Questo è il contenuto della prima colonna.</p>
          </Col>
          <Col xs={4} md={4} className="sideDx">
            <div>
              <h2>Lingua del Profilo</h2>
              <p>Italiano</p>
              <hr />
              <h2>Lingua del Contenuto</h2>
              <p>Italiano</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SideBar;
