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
import { getFetch, getFetchUser } from "../redux/actions";
import ExpModal from "./ExpModal";
import CardExp from "./CardExp";
import PostCentral from "./PostCentral";
import PostCard from "./PostCard";
import PostSx from "./PostSx";
import PostDx from "./PostDx";

const ProfiloPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchUser());
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
            <Formation />
            <Interests />
          </Col>
          <Col xs={4}>
            <SideBar />
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default ProfiloPage;
