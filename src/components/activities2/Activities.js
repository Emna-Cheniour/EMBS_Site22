import "./Activities.css";
import { ReactComponent as DnaIcon } from "./dna.svg";
import { ReactComponent as BiologyIcon } from "./biology.svg";
import React from 'react';
import timelineElements from "./timelineElements";
import "./styleAct.css";
import act from "./img/act.jpeg";
import { Wrapper, BgImage, Content, pageTransition } from "../bannerElements";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Visits from "./Visits";
import "react-vertical-timeline-component/style.min.css";

function Activities2() {
  let dnaIconStyles = { background: "#0072bc" };
  let biologyIconStyles = { background: "#7da7d9" };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
    <Wrapper>
      <BgImage src={act}></BgImage>
      <Content>
        <h1 className="banner-text">Activities</h1>
      </Content>
    </Wrapper>
    <div>
    <h1 className="title">Our Activities</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isDnaIcon = element.icon === "dna";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isDnaIcon ? dnaIconStyles : biologyIconStyles}
              icon={isDnaIcon ? <DnaIcon /> : <BiologyIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isDnaIcon ? "dnaButton" : "biologyButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    <Visits />
  </motion.div>
    
  );
}

export default Activities2;
