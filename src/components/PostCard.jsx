import { Col, Container, Row } from "react-bootstrap";
import { FaEarthAmericas } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";

const PostCard = () => {
  return (
    <Container fluid className="px-4 py-3 my-3 bg-white">
      <Row className="d-flex align-items-center">
        <Col xs={2}>
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-100 rounded-circle"
          />
        </Col>
        <Col xs={6}>
          <h3>Domenico Cicero</h3>
          <p className="text-secondary mb-0">780.342 follower</p>
          <p className="text-secondary">
            1s <FaEarthAmericas />
          </p>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
          <div className="d-flex align-items-top">
            <GoKebabHorizontal className="fs-4 me-3" />
            <IoMdClose className="fs-4" />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, reprehenderit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, reprehenderit.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-100"
          />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={1} className="d-flex ms-3 mt-3 align-items-center">
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-50 rounded-circle"
          />
          <img
            src="https://www.vigamusacademy.com/beta/wp-content/uploads/2021/06/linguaggio-di-programmazione.jpg"
            alt="profilo"
            className="w-50 rounded-circle"
          />
          <span className="ms-2 text-secondary">80</span>
        </Col>
        <Col xs={5} className="d-flex justify-content-end">
          <p className="mb-0 text-secondary mt-2">48 commenti - 95 diffusioni post</p>
        </Col>
      </Row>
      <Row className="mt-3 border-top pt-3">
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <SlLike className="fs-2" />
            <span className="ms-3 text-secondary">Consiglia</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <TfiCommentAlt className="fs-2" />
            <span className="ms-3 text-secondary">Commenta</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <PiArrowsClockwiseFill className="fs-2" />
            <span className="ms-3 text-secondary">Diffondi il post</span>
          </div>
        </Col>
        <Col xs={3}>
          <div className="d-flex justify-content-center align-items-center">
            <BsFillSendFill className="fs-2" />
            <span className="ms-3 text-secondary">Invia</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCard;