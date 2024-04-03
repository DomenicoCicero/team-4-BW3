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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFetch } from "../redux/actions";
import ExpModal from "./ExpModal";

const ProfiloPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetch());
  }, []);
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
        {/* <Footer /> */}
        <ExpModal />
      </Container>
    </>
  );
};

export default ProfiloPage;
