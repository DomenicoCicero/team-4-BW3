import { Col, Container, Row } from "react-bootstrap";

function SideBar() {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={8} md={8} className="centered">
            <h2>Ciao</h2>
            <p>Questo è il contenuto della prima colonna.</p>
          </Col>
          <Col xs={4} md={4}>
            <div className="sideDx">
              <div className="icona">
                <h2 className=" mt-2" style={{ fontSize: "23px" }}>
                  Lingua del Profilo
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <p className="ms-3" style={{ color: "grey" }}>
                Italiano
              </p>
              <hr />
              <div className="icona">
                <h2 className="" style={{ fontSize: "23px" }}>
                  Lingua del Profilo
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </div>
              <p className="ms-3" style={{ color: "grey" }}>
                www.linkedin.com/MarioRossi-51814819a
              </p>
            </div>
            <div className="sideDx2 mt-3">
              <div className="head1">
                <img
                  src="https://www.beverfood.com/wp-content/uploads/2019/05/ichnusa-2019.jpg"
                  alt=""
                  className="img1"
                ></img>
                <div className="logo">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEX////YAAAAAADXAADtn5/ndnbm5ub6+vrDw8PNzc1gYGDq6ur09PTi4uLc3NxNTU2Xl5c6OjqpqakfHx9VVVXV1dWgoKCOjo4sLCyysrIyMjJra2slJSV+fn51dXVHR0cTExPgS0uGhoYf9JKBAAAEQUlEQVRoge2Zi3KrKhRAd+25iiCKKBDi8/j/H3kQHyFqEzXpnTn3dnc6kzJlgTy2sAKwN359ftj4/LW7yv74gf+f4FHwsC5lVV136Ot/egTneTx+CmJWFXUXug2r1BviGq6rPoULLSP7gajLyElta8T8Ss8JdBwu0zQ09IC5nL6XFALsFBWUx2vwM7gQOIYodzmE9d0Gh50gCJQ6DicxA3DYeQhB13NCp71GmvEvtof9ARz5WgByOAk3nH6S1fQgmhI7LaI+Chdh5UO95PgVQGIXSZ7PExnn0UE4qApBYxdJgm+cFuBqyjhSQOwSpxwnF/8oPCx4D8805zBUjiXOW5BmHqiogrS9Ep/3zbcePQoHpXniZQTJqGnTiMrUcsAUajPKNCnMXyZKxbzNGX2cW5jhIcRAJI2X9Zys0h5QXMYFENJMe6vBXrk16E8Sl8BYM/D9dN6jtWeKSyYyrxHu7tpaL8+yYpRoVHrYXZGmFBe2oTB1ivVxOBR23TUOxySXYngQzJNyLLx24jhcjEmrVnk7w+spb6FuarHaqvwEHikY85Yo5p7jmOIxK8gpO+Qn4JiGVTNU580MNz+xdx/pcTivo+4uvVg4j5hC7X3hZkp/DFcIcYauCzhgFcoFPCPHex7kBeHLnkOgVbIo3Nz/T+A9p1l0EhCKoFuw5fFhCXtOcY/JQOS5rG9j1SLf3z4BPFktCOe8Lm/kmNr0GFAC/vxu3dibu+ADh3abnPBl+PgEI+c+s8Y2U7ZfvPv3H+fCdlwpd0GSdYsn4EBt5lqu5oClZf463JxOrmW+Tn3B5qv5KPwx52X44fiBvw3+z974PcF/764Cn7vjY4z9NeDjG+MH/l+Df+tS/NZN9K3b/wf+t8LJwzdyELMC4+qkKdJ4NkXCctwDCmHTFSw9ZYr4ZIq66Ug7mKL+LHpneE6ZoivqT1jK5YQWfm+KfH3CFIUx9s0t1+HU0coUYQERY4fhfGmKzBQEXc9xTVGmzLjhw6ZIL01Rae4mpHFMUaVpYNdKfNwUIccUddofOGQyRZc8n0/9J0xRt2WKRDuYIo0UDETKi7Q8a4pareXIiSVuPFBmPklYBaW5fRJpl2l7xhTpxGsJYtHFKwMqs+F2oRtPi8KaomEulDxlinhvipQ1RQOn054Z4ZJic1pv5r2FveycKUIdBCSd9vrFmqJLF7de+gZTJFG7NkV2Eb3BFNldlIRXBx6N92fMk2x6ouoVU8TuTNGYt26mqNuq/NwUjdsxdE1RXI9ZgU2G56wpGjJXK9MZvmGKmq1XxhlTpE0aXJqizfv/HlN0WcCh6FamqDxjinDhS28JDzRbmaKt5LLHFC3hSK9MUcaPD0uo16bo2m9bXt2aPG+KCqwrZx/GAyd6kymyHLXJES/DxycYOf++Kfrq2PKqKQJ5bd9jisoWb6S+B988HjJFj7/BfA1+OH7gfwX8D/+NUjqGxZ/YAAAAAElFTkSuQmCC"
                    alt=""
                    style={{ position: "absolute", top: "77px", left: "30px" }}
                  ></img>
                </div>
                <div className="testoside2">
                  <h3> Ichnusa srl</h3>
                  <p>
                    {" "}
                    Marco, scopri le opportunità offerte <b>da Ichnusa group</b>
                  </p>
                  <p>Scopri le ultime offerte di lavoro e notizie</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SideBar;
