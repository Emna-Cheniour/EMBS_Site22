import React from "react";
import { Row, Container } from "react-bootstrap";
import "./homeStyle.css";
import asma from "./img/team/asma.jpg";
import yasmine from "./img/team/yasmine.JPG";
import syrine from "./img/team/syrine.JPG";
import amina from "./img/team/amina.JPG";
import khouloud from "./img/team/khouloud.jpg";
import emna from "./img/team/emna.JPG";
import chaima from "./img/team/chaima.jpg";
import nour from "./img/team/nour.jpg";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const ourTeam = [
  {
    image: amina,
    name: "Amina Elair",
    post: "Chairwoman",
    fb: "https://www.facebook.com/profile.php?id=100005447370834",
    insta: "https://www.instagram.com/amina_elair/",
    linkedin: "https://www.linkedin.com/in/amina-elair-1bba82219",
  },
  {
    image: yasmine,
    name: "Yasmine Zarrouk",
    post: "Vice Chair",
    fb: "https://www.facebook.com/yasmiinezarrouk/",
    insta: "https://www.instagram.com/yasszarrouk_/",
    linkedin: "#",
  },
  {
    image: syrine,
    name: "Syrine Jerbi",
    post: "HR Manager",
    fb: "https://www.facebook.com/cyrine.jerbi.5201",
    insta: "https://www.instagram.com/syrine.jerbi/",
    linkedin: "https://www.linkedin.com/in/syrine-jerbi-3a4642202",
  },
  {
    image: khouloud,
    name: "Khouloud Kharouni",
    post: "General Secretary",
    fb: "https://www.facebook.com/profile.php?id=100009469162142",
    insta: "https://www.instagram.com/kkhoulouud/",
    linkedin: "#",
  },
  {
    image: chaima,
    name: "Chaima Fadhloune ",
    post: "Training Manager",
    fb: "https://www.facebook.com/chaima.fadhloune.31",
    insta: "https://www.instagram.com/chaima_fadhloune/",
    linkedin: "https://www.linkedin.com/in/chaima-fadhloune-961330211",
  },
  {
    image: nour,
    name: "Nour Kalai",
    post: "Media Manager",
    fb: "https://www.facebook.com/nour.kalai",
    insta: "https://www.instagram.com/nour.kalai/",
    linkedin: "https://www.linkedin.com/in/nour-kalai-6b1767193",
  },
  {
    image: asma,
    name: "Asma Hathroubi",
    post: "Treasurer",
    fb: "https://www.facebook.com/asma.hathroubi.3/",
    insta: "https://www.instagram.com/asma_hath/",
    linkedin: "https://www.linkedin.com/in/asma-hathroubi-b311521b9/",
  },
  {
    image: emna,
    name: "Emna Cheniour",
    post: "Webmaster",
    fb: "https://www.facebook.com/emna.cheniour.23",
    insta: "https://www.instagram.com/emna.cheniour/",
    linkedin: "https://www.linkedin.com/in/emna-cheniour-06568b200/",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      {/*  check https://github.com/michalsnik/aos#animations for the animation */}
      <Container>
        <Row>
          <h1 className="title">Our Team</h1>
        </Row>

        <Row className="main-row">
          {ourTeam.map((e) => (
            <div key={e.post} className="team-boxes">
              <img src={e.image} alt={e.name} />
              <p className="name">{e.name}</p>
              <p className="post">{e.post}</p>
              <p className="social">
                <a href={e.fb} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-facebook-f"></i> */}
                  <SiFacebook className="social-icon" />
                </a>
                <a href={e.insta} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-instagram"></i> */}
                  <SiInstagram className="social-icon" />
                </a>
                <a href={e.linkedin} target="_blank" rel="noopener noreferrer">
                  {/* <i className="fab fa-linkedin-in"></i> */}
                  <SiLinkedin className="social-icon" />
                </a>
              </p>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
