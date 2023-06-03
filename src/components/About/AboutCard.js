import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Sahu </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />I am a Information Technology Final Year Student (B.Tech).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "अंतः अस्ति प्रारंभः।"{" "}
          </p>
          <footer className="blockquote-footer">shubh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
