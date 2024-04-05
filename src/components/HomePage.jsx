import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import PostSx from "./PostSx";
import PostCentral from "./PostCentral";
import PostDx from "./PostDx";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFetchPosts } from "../redux/actions";
import Footer from "./Footer";

const HomePage = () => {
  const postsArray = useSelector((state) => {
    return state.post.content;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFetchPosts());
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <PostSx />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <PostCentral />
            {postsArray &&
              postsArray.map((post, i) => {
                return (
                  <div key={i}>
                    <PostCard post={post} />
                  </div>
                );
              })}
            {/* <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard /> */}
          </Col>
          <Col xs={12} md={12} lg={3}>
            <PostDx />
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default HomePage;
