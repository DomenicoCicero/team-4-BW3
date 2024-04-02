import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import PannelloProfilo from "./PannelloProfilo";
import SideBar from "./SidebarDx";
import AnalisiProfilo from "./AnalisiProfilo";
import RisorseProfilo from "./RisorseProfilo";
import AttivitaProfilo from "./AttivitaProfilo";
import EsperienzaProfilo from "./EsperienzaProfilo";
import Footer from "./Footer";
import Formation from "./Formation";
import Interests from "./Interests";

const ProfiloPage = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={8}>
            <PannelloProfilo />
            <AnalisiProfilo />
            <RisorseProfilo />
            <AttivitaProfilo />
            <EsperienzaProfilo />
            <Formation></Formation>
            <Interests></Interests>
          </Col>
          <Col xs={4}>
            <SideBar />
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default ProfiloPage;
