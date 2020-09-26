import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import visit2018_1 from "./img/visits/2018_1.webp";
import visit2018_2 from "./img/visits/2018_2.webp";
import visit2018_3 from "./img/visits/2018_3.webp";

const Visits = () => {
  return (
    <section className="visits-section">
      <Container>
        <Row>
          <h1 className="title">Our Industrial Visits </h1>
        </Row>
        <Row>
          <p className="body paragraph">
            EMBS Chapter makes several Industrial visits
          </p>
        </Row>
        <Row>
          <p className="visit-date paragraph">2018/2019</p>
        </Row>
        <Row className="main-row">
          <div className="visit-wrapper">
            <p className="visit-text">
              We believe that it's really crucial
              <br />
              to witness how real work is done
              <br />
              and that’s when the idea of
              <br />
              industrial visits came in for EMBS.
              <br />
              So don't hesitate to take part in
              <br />
              such an amazing experience !
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
                  src={visit2018_1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={visit2018_2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={visit2018_3}
                  alt="Third slide"
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
