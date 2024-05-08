import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I am <span className="purple">Stéphanie Cândido </span>
            from <span className="purple"> Recife, Brasil.</span>
            <br />
            I am currently an Information Systems student @ UFRPE looking for opportunities to gain knowledge and experience.
            <br />
            What motivates me is creating positive change and solutions for different communities, different problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Sci-Fi and Fantasy (I accept book recs)
            </li>
            <li className="about-activity">
              <ImPointRight /> Museum exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You make progress by implementing ideas."{" "}
          </p>
          <footer className="blockquote-footer">Shirley Chisholm</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
