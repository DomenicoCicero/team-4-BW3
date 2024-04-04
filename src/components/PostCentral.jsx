import { Col, Container, Form, Row } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const PostCentral = () => {
  return (
    <Container className="bg-white rounded">
      <Row className="d-flex align-items-center mt-2 mb-4 pt-3">
        <Col xs={2}>
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-100 rounded-circle"
          />
        </Col>
        <Col xs={10}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Avvia un post" className="rounded-50" style={{ height: "80px" }} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-primary fs-3">
              <FaImage />
            </span>
            <p className="mb-0 text-secondary fs-5">Contenuti multimediali</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-warning fs-3">
              <FaCalendarAlt />
            </span>
            <p className="mb-0 text-secondary fs-5">Evento</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-danger fs-3">
              <MdArticle />
            </span>
            <p className="mb-0 text-secondary fs-5">Scrivi un articolo</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCentral;
