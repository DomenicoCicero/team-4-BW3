import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const PostSx = () => {
  return (
    <Container>
      <Row>
        <Col style={{ position: "relative" }}>
          <div id="box12" style={{ height: "500px" }}>
            <div className="head1">
              <img
                src="https://www.beverfood.com/wp-content/uploads/2019/05/ichnusa-2019.jpg"
                alt=""
                className="imguser2"
              />
              <div className="logo">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEX////YAAAAAADXAADtn5/ndnbm5ub6+vrDw8PNzc1gYGDq6ur09PTi4uLc3NxNTU2Xl5c6OjqpqakfHx9VVVXV1dWgoKCOjo4sLCyysrIyMjJra2slJSV+fn51dXVHR0cTExPgS0uGhoYf9JKBAAAEQUlEQVRoge2Zi3KrKhRAd+25iiCKKBDi8/j/H3kQHyFqEzXpnTn3dnc6kzJlgTy2sAKwN359ftj4/LW7yv74gf+f4FHwsC5lVV136Ot/egTneTx+CmJWFXUXug2r1BviGq6rPoULLSP7gajLyElta8T8Ss8JdBwu0zQ09IC5nL6XFALsFBWUx2vwM7gQOIYodzmE9d0Gh50gCJQ6DicxA3DYeQhB13NCp71GmvEvtof9ARz5WgByOAk3nH6S1fQgmhI7LaI+Chdh5UO95PgVQGIXSZ7PExnn0UE4qApBYxdJgm+cFuBqyjhSQOwSpxwnF/8oPCx4D8805zBUjiXOW5BmHqiogrS9Ep/3zbcePQoHpXniZQTJqGnTiMrUcsAUajPKNCnMXyZKxbzNGX2cW5jhIcRAJI2X9Zys0h5QXMYFENJMe6vBXrk16E8Sl8BYM/D9dN6jtWeKSyYyrxHu7tpaL8+yYpRoVHrYXZGmFBe2oTB1ivVxOBR23TUOxySXYngQzJNyLLx24jhcjEmrVnk7w+spb6FuarHaqvwEHikY85Yo5p7jmOIxK8gpO+Qn4JiGVTNU580MNz+xdx/pcTivo+4uvVg4j5hC7X3hZkp/DFcIcYauCzhgFcoFPCPHex7kBeHLnkOgVbIo3Nz/T+A9p1l0EhCKoFuw5fFhCXtOcY/JQOS5rG9j1SLf3z4BPFktCOe8Lm/kmNr0GFAC/vxu3dibu+ADh3abnPBl+PgEI+c+s8Y2U7ZfvPv3H+fCdlwpd0GSdYsn4EBt5lqu5oClZf463JxOrmW+Tn3B5qv5KPwx52X44fiBvw3+z974PcF/764Cn7vjY4z9NeDjG+MH/l+Df+tS/NZN9K3b/wf+t8LJwzdyELMC4+qkKdJ4NkXCctwDCmHTFSw9ZYr4ZIq66Ug7mKL+LHpneE6ZoivqT1jK5YQWfm+KfH3CFIUx9s0t1+HU0coUYQERY4fhfGmKzBQEXc9xTVGmzLjhw6ZIL01Rae4mpHFMUaVpYNdKfNwUIccUddofOGQyRZc8n0/9J0xRt2WKRDuYIo0UDETKi7Q8a4pareXIiSVuPFBmPklYBaW5fRJpl2l7xhTpxGsJYtHFKwMqs+F2oRtPi8KaomEulDxlinhvipQ1RQOn054Z4ZJic1pv5r2FveycKUIdBCSd9vrFmqJLF7de+gZTJFG7NkV2Eb3BFNldlIRXBx6N92fMk2x6ouoVU8TuTNGYt26mqNuq/NwUjdsxdE1RXI9ZgU2G56wpGjJXK9MZvmGKmq1XxhlTpE0aXJqizfv/HlN0WcCh6FamqDxjinDhS28JDzRbmaKt5LLHFC3hSK9MUcaPD0uo16bo2m9bXt2aPG+KCqwrZx/GAyd6kymyHLXJES/DxycYOf++Kfrq2PKqKQJ5bd9jisoWb6S+B988HjJFj7/BfA1+OH7gfwX8D/+NUjqGxZ/YAAAAAElFTkSuQmCC"
                  alt=""
                  style={{ position: "absolute", top: "77px", left: "30px" }}
                  id="imguser"
                />
              </div>
              <div className="testosideprofile">
                <h3>Marco</h3>
                <p>
                  <span> Marco, scopri le opportunità </span>
                  <hr></hr>
                </p>
              </div>
              <Row style={{ padding: "10px" }}>
                <Col xs={10}>
                  <p>Visitatori del profilo</p>
                  <p>Visitatori del profilo</p>
                </Col>
                <Col xs={2}>
                  <p>79</p>
                  <p>200</p>
                </Col>
              </Row>
              <hr></hr>
              <span>
                <p className="underline-text" style={{ textAlign: "center" }}>
                  Raggiungi i tuoi obbiettivi personali
                </p>
                <hr></hr>
                <Row style={{ padding: "5px" }}>
                  <Col xs={1}>
                    <img src="/icons/9.svg" alt="" />
                  </Col>
                  <Col xs={11} id="colfinal">
                    <p className="underline-text" style={{ textAlign: "center" }}>
                      I miei elementi
                    </p>
                  </Col>
                </Row>
              </span>{" "}
            </div>
          </div>
          <div id="box12" className="mt-3" style={{ overflow: "hidden" }}>
            <Row style={{ paddingLeft: "8px", paddingTop: "20px" }}>
              <Col>
                <p style={{ color: "#5192D4" }}>
                  <b>Gruppi</b>
                </p>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "8px" }}>
              <Col xs={10}>
                <p style={{ color: "#5192D4" }}>
                  {" "}
                  <b>Eventi</b>
                </p>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <Row style={{ paddingLeft: "8px" }}>
              <Col>
                <p style={{ color: "#5192D4" }}>
                  {" "}
                  <b>Hastag seguiti</b>
                </p>
              </Col>
            </Row>
            <div className="footcardhome">
              <h3 style={{ fontSize: "19px" }}>Mostra Tutto</h3>
            </div>
          </div>
        </Col>
        {/* <Col xs={6}>
          <div id="box12" style={{ height: "500px" }}></div>
        </Col>

        <Col xs={3}>
          <div id="box12" style={{ height: "500px" }}></div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default PostSx;
