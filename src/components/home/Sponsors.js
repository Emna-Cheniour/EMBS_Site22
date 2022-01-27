import React from "react";
import { Container, Row } from "react-bootstrap";
import spr1 from "./img/sponsors/1.png";
import spr2 from "./img/sponsors/2.png";
import spr3 from "./img/sponsors/3.png";
import spr4 from "./img/sponsors/4.png";
import spr5 from "./img/sponsors/5.png";
import spr6 from "./img/sponsors/6.png";
import spr7 from "./img/sponsors/7.png";
import spr8 from "./img/sponsors/8.png";
import spr9 from "./img/sponsors/9.png";
import spr10 from "./img/sponsors/10.png";
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const imgSponsors = [
  { source: spr1, alt: "sponsor image", id: "1" },
  { source: spr2, alt: "sponsor image", id: "2" },
  { source: spr3, alt: "sponsor image", id: "3" },
  { source: spr4, alt: "sponsor image", id: "4" },
  { source: spr5, alt: "sponsor image", id: "5" },
];
const imgSponsors2 = [
  { source: spr6, alt: "sponsor image", id: "6" },
  { source: spr7, alt: "sponsor image", id: "7" },
  { source: spr8, alt: "sponsor image", id: "8" },
  { source: spr9, alt: "sponsor image", id: "9" },
  { source: spr10, alt: "sponsor image", id: "10" },
];


function Sponsors(){
  useEffect(() => {
    Aos.init({duration : 2000});
  }, [])
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="sponsors-section section">
      <Container>
        <Row data-aos="fade-down">
          <h1 className="title titleSponsor">Our Sponsors</h1>
        </Row>
        <Row data-aos="fade-down">
          <p className="body paragraph">
            You can find below the list of our sponsors who helped us reach our
            current success.
          </p>
        </Row>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Row className="sponsor">
          {imgSponsors.map((e) => (
            <img key={e.id} src={e.source} alt="" />
          ))}
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row className="sponsor">
          {imgSponsors2.map((e) => (
            <img key={e.id} src={e.source} alt="" />
          ))}
        </Row>
        </Carousel.Item>
      </Carousel>
      </Container>
    </section>
  );
};

export default Sponsors;
