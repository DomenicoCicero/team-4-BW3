import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getFetchUser } from "../redux/actions";

const PostCentral = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => {
    return state.profilo.user;
  });

  useEffect(() => {
    if (user) {
      dispatch(getFetchUser());
    }
  }, []);

  return (
    <Container className="bg-white rounded">
      <Row className="d-flex align-items-center mt-2 mb-4 pt-3">
        <Col xs={2}>
          <div id="fotopost">
            <img src={user.image} alt="profilo" style={{ width: "100%" }} id="fotopost" />
          </div>
        </Col>
        <Col xs={10}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Avvia un post" className="rounded-50" style={{ height: "80px" }} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row id="align">
        <Col xs={5}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-primary ">
              <FaImage />
            </span>
            <p className="mb-0 text-secondary ">Contenuti multimediali</p>
          </div>
        </Col>
        <Col xs={2}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-warning ">
              <FaCalendarAlt />
            </span>
            <p className="mb-0 text-secondary ">Evento</p>
          </div>
        </Col>
        <Col xs={5}>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-3 text-danger fs-3">
              <MdArticle />
            </span>
            <p className="mb-0 text-secondary">Scrivi un articolo</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCentral;
