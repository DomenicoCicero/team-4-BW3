import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const PannelloProfilo = () => {
  return (
    <Container fluid>
      <Row className="position-relative">
        <Col>
          <img
            src="https://media.licdn.com/dms/image/D4D16AQE55sAt_zgI2g/profile-displaybackgroundimage-shrink_350_1400/0/1695315737686?e=1717632000&v=beta&t=sko7WN1lJodKnZRuaK8k-s9gdfiQOeAnnmde0WvaHzw"
            alt="copertina"
            className="w-100"
          />
          <div className="position-absolute immagine-profilo mb-1">
            <img
              src="https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg"
              alt="profilo"
              className="w-25 object-fit-cover rounded-circle"
            />
          </div>
          <div className="position-absolute border rounded-circle p-2 bg-white text-primary pen">
            <FaPen />
          </div>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-between">
        <Col xs={5}>
          <div className="d-flex align-items-center">
            <h2 className="me-2">Domenico Cicero</h2>
            <div className="d-flex align-items-center text-primary bordo-tratteggiato-arrotondato">
              <MdOutlineVerifiedUser />
              <span>Verifica ora</span>
            </div>
          </div>
        </Col>
        <Col xs={1} className="text-center">
          <FaPen />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <h4>Studente diplomato presso liceo Scientifico Nicolò Palmeri</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p>
            Palermo, Sicilia, Italia <span className="text-primary fw-semibold">Informazioni di contatto</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type="button" className="bg-primary text-white rounded-50 me-3 fw-semibold">
            Disponibile per
          </Button>
          <Button type="button" className="bg-white text-primary rounded-50 me-3 fw-semibold">
            Aggiungi sezione del profilo
          </Button>
          <Button type="button" className="bg-white text-secondary border-secondary rounded-50 fw-semibold">
            Altro
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PannelloProfilo;
