import { Col } from "react-bootstrap";
import "./ProjectCard.css";
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={link} className="project-link">
            <h4 className="project-title">{title}</h4>
          </a>

          <span>{description}</span>
          <br />
          <span></span>
        </div>
      </div>
    </Col>
  );
};
