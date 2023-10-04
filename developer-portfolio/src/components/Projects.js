import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Trucker Track",
      description: "Coming Soon",
      imgUrl: projImg1,
      link: "https://github.com/chris-cozy/TruckerApp",
    },
    {
      title: "Persona Talk",
      description: "Coming Soon",
      imgUrl: projImg2,
      link: "https://github.com/chris-cozy/PersonaTalk",
    },
    {
      title: "Kibbi Companion",
      description: "Coming Soon",
      imgUrl: projImg3,
      link: "https://top.gg/bot/1095193298425094204?s=0cec12cf392f0",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2>Projects</h2>
              <p> A few noteable projects I've created.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                  defaultActiveKey="/home"
                >
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="first">
                      01.
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">02.</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">03.</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>Lorum Ipsum</Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>Lorem Ipsum</Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      {/*<img className="background-image-right" src={colorSharp2} />*/}
    </section>
  );
};
