import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/amongus_baby.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row align-item-center">
          <Col sm={6} className="d-flex align-items-center">
            {<img src={logo} alt="Logo" className="mr-2 footer-logo" />}
            <h2>cozy</h2>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/chris-sanders-jr/">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              {/*<a href="">
                <img src={navIcon2} alt="facebook" />
              </a>*/}
              <a href="https://www.instagram.com/chriscozy/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>CopyRight 2023. All Rights Reserved by Cozy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
