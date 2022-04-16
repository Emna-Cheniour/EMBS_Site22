import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import img1 from "./img/visits/img1.jpg";
import img2 from "./img/visits/img2.jpg";
import img3 from "./img/visits/img3.jpg";
import img4 from "./img/visits/img4.jpg";
import img5 from "./img/visits/img5.jpg";
import img6 from "./img/visits/img6.jpg";

const Visits = () => {
  return (
    <section className="visits-section">
      <Container>
        <div className="gallery">
        <Row>
          <h1 className="title">Gallery </h1>
        </Row>
        <Row>
          <p className="body paragraph">
            EMBS Chapter makes several Activities
          </p>
        </Row>
        </div>
        <Row>
          <p className="visit-date paragraph">2021/2022</p>
        </Row>
        <Row className="main-row">
          <div className="visit-wrapper">
            <p className="visit-text">
            In EMBS INSAT SB we try to organize <br/>a variety of events that may be of <br/> interest to all categories of students:<br/> Projects, Hackathons, conferences,<br/> industrial visits...
            </p>
            <Carousel
              pause="false"
              interval={2500}
              className="visit-carr"
              fade={false}
            >
              <Carousel.Item className="item">
                <img
                  className="d-block w-100"
                  src={img6}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img5}
                  alt="Fifth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="Sixth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Visits;
