import React from "react";
import { Carousel, Container } from "react-bootstrap";
import rahma from "./img/feedback/rahma.webp";
import houssem from "./img/feedback/houssem.webp";
import aziz from "./img/feedback/aziz.webp";



const FeedBack = () => {

  return (
    <div className="Feedback">
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={rahma} alt="First slide" />
            <Carousel.Caption>
              <p className="name">Rahma</p>
              <p className="description">
                EMBS was a safe haven for me, helped my shy freshman self pave
                her way towards her dream career. I am not there yet but I know
                that wherever I go IEEE will be part of it.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={houssem} alt="Third slide" />

            <Carousel.Caption>
              <p className="name">Houssem</p>
              <p className="description">
                When you are good at something never do it for free, but there
                is always an exception for The IEEE
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={aziz} alt="Third slide" />

            <Carousel.Caption>
              <p className="name">Aziz Nasr</p>
              <p className="description">
                Life is about becoming a better version of yourself, in order to
                make it you really need to have an organization like IEEE behind
                you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default FeedBack;
