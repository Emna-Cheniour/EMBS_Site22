import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "./img/collabs/ieeeday.jpg";
import img2 from "./img/collabs/img2.webp";
import img3 from "./img/collabs/r8.jpg";
import img4 from "./img/collabs/summerschool.jpg";

const collab = [
  {
    link:
      "https://www.facebook.com/IeeeInsatStudentBranch/posts/4572769899428210?__cft__[0]=AZWYdC6TBSE19GZ6RC8lVneBbg9p5c_JNGtZ9p3ujgd9-Tta3SlyWKmTXWrn9ODQ1pZvgFHVMCo2vykETy4S69XTosiH_HSz90Nyqsfne0QEMWGozhn-95baUavuqJ0xN4_4zgau4WdJEBR1FA3wF_Ne&__tn__=%2CO%2CP-R",
    image: img1,
    title: "IEEE Day",
    description: " What a day it was, we finally got the chance to celebrate this international IEEE Event in real life on the 13th of October.",
    
  },
  {
    link:
      "https://www.facebook.com/pg/IeeeInsatStudentBranch/photos/?tab=album&album_id=2085121378193087&ref=page_internal",
    image: img2,
    title: "TSYP ",
    description: "The IEEE Tunisian Students and Young Professionals TSYP Congress",
  },
  {
    link:
      "https://www.facebook.com/IeeeInsatStudentBranch/posts/4720888191283046?__cft__[0]=AZWuFXKdbrIAonbX4D25vP5FtDnIbEags75tO1GzdWMTf3DDwSFUzQwHvTIbOdykg07rwMe7gjT33M0-_yZN309zMhOTUJ9DIJEAYnBzrjgJCXFVp1gjunbVkCJf5ERaVklGTueuLPDNTJYMfp4fkWZm&__tn__=%2CO%2CP-R",
    image: img3,
    title: "R8 cross sectional Booster program",
    description: "A 3-day online bootcamp and the the theme is 'back to the future'",

  },
  {
    link: "https://www.facebook.com/IeeeInsatStudentBranch/posts/4481624981876036?__cft__[0]=AZUNAtSgpTmh_q51lExF0pMfvLjlzqvb3atDU9Rxpk7_7IkgikNYXTs2AwkuGuTVvOopksUfYp99p1ddLUZR9lAxu5dQy_Z5Q7IDK7r3CR0PlC3umbebK2_empDnSxWfsGs3UT4gbSEiNvSgOVASjdHz&__tn__=%2CO%2CP-R",
    image: img4,
    title: "Summer School 4.0",
    description: "A marathon of workshops during 3 whole days that cover all of the topics that involve engineering and even explore some of your soft skills.",
  },
];

const Collaboration = () => {
  return (
    <section className="collab-section">
      <Container>
        <Row>
          <h1 className="title">Events We Participed In</h1>
        </Row>
        <Row>
          <p className="body paragraph">
            Our chapter takes part in yearly events, such as IEEE day, TSYP...
            By organising and attending them along with other INSAT student
            branch chapters.
          </p>
        </Row>
        <Row className="main-row">
          {collab.map((e) => (
            <div key={e.link} className="collab-box">
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={e.image} alt="" />
              </a>

              <div className="main-row-text">
                <h2>{e.title}</h2>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Collaboration;
