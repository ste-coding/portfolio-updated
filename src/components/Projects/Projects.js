import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import thriftopia from "../../Assets/Projects/thriftopia.jpeg";
import crossyroad from "../../Assets/Projects/crossyroad.png";
import cyberquest from "../../Assets/Projects/cyberquest.png";
import menthelp from "../../Assets/Projects/menthelp.png";
import womentech from "../../Assets/Projects/mulheresTech.png";
import ewaste from "../../Assets/Projects/ewaste.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ewaste}
              isBlog={false}
              title="e-waste: a database modelling project"
              description="Modeling of a database for a system that connects users to the nearest electronic waste collection points, offering discount coupons from partnerships."
              ghLink="https://lnkd.in/d5SbUght"
              // demoLink="https://www.linkedin.com/posts/stephanie-candido_miniprojeto-sistema-de-localiza%C3%A7%C3%A3o-de-pontos-activity-7193319696975220736-iC7e?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyberquest}
              isBlog={false}
              title="CyberQuest"
              description="CyberQuest is an educational game developed as part of the Interdisciplinary Project for Information Systems 1, which proposes the creating of a project using Python and Kivy. The game aims to educate players about fundamental cybersecurity concepts, providing an interactive and challenging experience."
              ghLink="https://github.com/ste-coding/cyberquest-game"
              // demoLink="https://github.com/ste-coding/cyberquest-game"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thriftopia}
              isBlog={false}
              title="Thriftopia"
              description="Thriftopia is a platform for donating clothes and accessories, allowing you to register items for donation. Connecting conscious consumers to donors. This project was developed as part of module 2 of the Programmers of Tomorrow training."
              ghLink="https://github.com/ste-coding/M2-PdA-projeto-cadastro"
              // demoLink="https://github.com/ste-coding/M2-PdA-projeto-cadastro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={womentech}
              isBlog={false}
              title="Women in Tech"
              description="Implementation of an API integrated into a website aimed at registering women working in the technology sector in Brazil. To ensure efficient data management, MongoDB was used as the main database and Insomnia was used to test the functionalities (CRUD) in a production environment."
              ghLink="https://github.com/ste-coding/backend-programaria"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crossyroad}
              isBlog={false}
              title="Crossy Road"
              description="This project came about during my JavaScript learning along with the Alura course. By using the p5.js library, I seek to combine traditional gameplay with elements of creative programming. The result is a game that reflects the practical and exploratory approach to language, with a playful understanding of object orientation."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menthelp}
              isBlog={false}
              title="MentHelp"
              description="This is a web project focused on mental well-being, offering resources, inspiration and support to take care of mental health. Project carried out as a squad in module 2 of Prgramadores do Amanhã"
              ghLink="https://github.com/VictorCDS-p/ProjetoFinal-M2"
              demoLink="https://victorcds-p.github.io/ProjetoFinal-M2/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
