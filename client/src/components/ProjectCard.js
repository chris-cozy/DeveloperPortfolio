import { Col } from "react-bootstrap";
import "./ProjectCard.css";
export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Preview" />
        <div className="proj-txtx">
          <a href={link} className="project-link">
            <h4 className="project-title">{title}</h4>
          </a>

          <p className="proj-desc">{description}</p>
          <br />
        </div>
      </div>
    </Col>
  );
};
