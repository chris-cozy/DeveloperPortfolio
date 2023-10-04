import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    {
      name: "HTML",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "React.js",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Node.js",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "Docker",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
    {
      name: "C",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
      name: "C++",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "Python",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "Javascript",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: "MySQL",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Unity",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg",
    },
    {
      name: "Git",
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Throughout my time in computer science, I have learned and
                refined many skills which I use in my work. Here are a few
                notable tools in my technical toolkit.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={750}
                removeArrowOnDeviceType={[
                  "tablet",
                  "mobile",
                  "desktop",
                  "superLargeDesktop",
                ]}
              >
                {skills.map((skill) => {
                  return (
                    <div className="item">
                      <img src={skill.imgUrl} alt="Skill" />
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
