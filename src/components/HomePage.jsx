import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import PostSx from "./PostSx";
import PostCentral from "./PostCentral";
import PostDx from "./PostDx";
import PostCard from "./PostCard";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={3}>
            <PostSx />
          </Col>
          <Col xs={6}>
            <PostCentral />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Col>
          <Col xs={3}>
            <PostDx />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
