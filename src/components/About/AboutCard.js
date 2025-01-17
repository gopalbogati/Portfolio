import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Gopal Bogati </span>
              from <span className="purple"> Sydney, Australia</span>
            <br />I have Completed Master's Of Information Technology from Charles Sturt University and had done my bachelor in Computer Engineering from Pokhara University, Nepal.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching and Reading Cryptocurrency Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Youtube Contents
            </li>

          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Where ever you go always try to make a difference"{" "}
          </p>
          <footer className="blockquote-footer">Gopal Bogati</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
