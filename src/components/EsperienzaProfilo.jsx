import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { BsBraces, BsFillBriefcaseFill } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import ExpModal from "./ExpModal";
const EsperienzaProfilo = () => {
  const user = useSelector(state => {
    return state.profilo.user;
  });
  return (
    <Container fluid className="px-4 pt-3 border border-secondary rounded my-3" id="box12">
      <Row>
        <Col className="d-flex justify-content-between mb-4">
          <h3>Esperienza</h3>
          <div>
            <Dropdown className="d-inline-block">
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                {/* <FaPlus className="fs-4 me-5" /> */}
                <ExpModal />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <BsFillBriefcaseFill className="me-2" />
                  Aggiungi posizione lavorativa
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <IoCalendarNumber className="me-1" /> Aggiungi pausa lavorativa
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <FaPen className="fs-4" />
          </div>
        </Col>
      </Row>
      {/*       -----------------------------------------inizio part dinamica---------------------------------- */}
      <Row>
        <Col xs={1}>
          <img src="./img/7.jpeg" alt="" style={{ width: "70px" }}></img>{" "}
        </Col>
        <Col xs={11} style={{ paddingLeft: "30px" }}>
          {/*             <div className="textexperience"> */}
          <h3>Prova2</h3>
          <p className="mb-0">esperienza0</p>
          <span>esperienza 1</span>
          <br></br>
          <span>esperienza 1</span>

          <h5 className="pt-3">prova2</h5>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <img src="./img/7.jpeg" alt="" style={{ width: "70px" }}></img>{" "}
        </Col>
        <Col xs={11} style={{ paddingLeft: "30px" }}>
          {/*             <div className="textexperience"> */}
          <h3>Prova2</h3>
          <p className="mb-0">esperienza0</p>
          <span>esperienza 1</span>
          <br></br>
          <span>esperienza 1</span>

          <h5 className="pt-3">prova2</h5>
          <hr></hr>
        </Col>
      </Row>

      {/*       -----------------------------------------fine part dinamica---------------------------------- */}
    </Container>
  );
};

export default EsperienzaProfilo;
