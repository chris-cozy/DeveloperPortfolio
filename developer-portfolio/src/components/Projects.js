import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Kirs",
      description: "Lorem ipsum",
      imgUrl: projImg1,
    },
    {
      title: "Kurse",
      description: "Lorem ipsum",
      imgUrl: projImg2,
    },
    {
      title: "Cures",
      description: "Lorem ipsum",
      imgUrl: projImg3,
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p> Noteable projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
                defaultActiveKey="/home"
              >
                <Nav.Item className="nav-item">
                  <Nav.Link className="nav-link" eventKey="first">
                    One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Three</Nav.Link>
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
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
