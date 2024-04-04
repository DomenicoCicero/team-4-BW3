import { Col, Container, Row } from "react-bootstrap";
import { FaEarthAmericas } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";

const PostCard = props => {
  const random = Math.floor(Math.random() * 500);
  return (
    <Container fluid className="px-4 py-3 my-3 bg-white">
      <Row className="d-flex align-items-center" id="fotopost">
        <Col xs={2}>
          <img src={props.post.user.image} alt="profilo" style={{ width: "100%" }} id="fotopost" />
        </Col>
        <Col xs={6}>
          <h5>
            {props.post.user.name} {props.post.user.surname}
          </h5>
          <p className="text-secondary mb-0">{props.post.user.area}</p>
          <p className="text-secondary">
            {props.post.createdAt.substring(0, 10)} <FaEarthAmericas />
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
          <h6>{props.post.user.title}</h6>
          <p>{props.post.text}</p>
          <span className="text-secondary">{props.post.user.bio}</span>
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
        <Col xs={5} className="d-flex ms-3 mt-3 align-items-center">
          <img src="/img/2.png" alt="profilo" className="imgut" />
          <span className="ms-2 text-secondary">{random} mi piace</span>
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
            <span className="ms-3 text-secondary">Diffondi </span>
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
