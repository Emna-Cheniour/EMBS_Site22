import React from "react";
import pic from "./img/pic.webp";
import { Wrapper, BgImage, Content, pageTransition } from "../bannerElements";
import { motion } from "framer-motion";
import Pdf from "./Pdf";
import { Container, Row } from "react-bootstrap";

const NewsLetter2 = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Wrapper>
        <BgImage src={pic}></BgImage>
        <Content>
          <h1 className="banner-text">NewsLetter</h1>
        </Content>
      </Wrapper>
      <Container>
        <Row>
          <h1 className="title">Our News</h1>
        </Row>
        <Row>
          <Pdf />
        </Row>
      </Container>
    </motion.div>
  );
};

export default NewsLetter2;
