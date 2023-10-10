import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import truckerTrackImg from "../assets/img/github.jpg";
import personaTalkImg from "../assets/img/telegram.jpg";
import kibbiCompanionImg from "../assets/img/discord.jpg";
import plantHavenImg from "../assets/img/plant_haven.png";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Plant Haven",
      description:
        "A full stack social media web application catered to plant owners and enthusiasts.",
      imgUrl: plantHavenImg,
      link: "https://the-plant-haven.netlify.app/",
    },
    {
      title: "Persona Talk",
      description:
        "An API built for creating and conversing with generative agents and personas. Currently has a telegram bot client, a dedicated web client is in development.",
      imgUrl: personaTalkImg,
      link: "https://github.com/chris-cozy/PersonaTalk",
    },
    {
      title: "Kibbi Companion",
      description:
        "A digital tamagotchi enabling users to adopt and care for a virtual Kirby. Currently has a discord bot client. a dedicated web client is in development. Peak use of 250+ users.",
      imgUrl: kibbiCompanionImg,
      link: "https://top.gg/bot/1095193298425094204?s=0cec12cf392f0",
    },
    {
      title: "Trucker Track",
      description: "A full stack truck driver management web application.",
      imgUrl: truckerTrackImg,
      link: "https://github.com/chris-cozy/TruckerApp",
    },
  ];

  const numberOfTabs = Math.ceil(projects.length / 3);

  const renderTabPanes = () => {
    const tabPanes = [];

    for (let i = 0; i < numberOfTabs; i++) {
      const startIndex = i * 3;
      const endIndex = startIndex + 3;
      const projectsInTab = projects.slice(startIndex, endIndex);

      const tabPane = (
        <Tab.Pane key={i} eventKey={`tab${i + 1}`}>
          <Row>
            {projectsInTab.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Tab.Pane>
      );

      tabPanes.push(tabPane);
    }

    return tabPanes;
  };

  const renderTabLinks = () => {
    const tabLinks = [];

    for (let i = 0; i < numberOfTabs; i++) {
      const tabLink = (
        <Nav.Item key={i}>
          <Nav.Link eventKey={`tab${i + 1}`}>{`0${i + 1}.`}</Nav.Link>
        </Nav.Item>
      );

      tabLinks.push(tabLink);
    }

    return tabLinks;
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2>Projects</h2>
              <p>
                {" "}
                Each of these projects is a testament to my passion for
                innovation, problem solving, and pushing the boundaries of what
                is currently possible. Explore this collection of noteable
                projects that embody my creativity and technical prowess.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                >
                  {renderTabLinks()}
                </Nav>
                <Tab.Content>{renderTabPanes()}</Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
