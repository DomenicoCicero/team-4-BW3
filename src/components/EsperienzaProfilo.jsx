import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const EsperienzaProfilo = () => {
  return (
    <Container fluid className="px-4 pt-3">
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <h3>Esperienza</h3>
          <div>
            <FaPlus className="fs-4 me-5" />
            <FaPen className="fs-4" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EsperienzaProfilo;
