import React from "react";
import pic from "./img/pic.webp";
import Charity from "./Charity";
import Collaboration from "./Collaboration";
import { Wrapper, BgImage, Content, pageTransition } from "../bannerElements";
import { motion } from "framer-motion";

const NewsLetter2 = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Wrapper>
        <BgImage src={pic}></BgImage>
        <Content>
          <h1 className="banner-text">NewsLetter</h1>
        </Content>
      </Wrapper>
      <Charity />
      <Collaboration />
    </motion.div>
  );
};

export default NewsLetter2;
