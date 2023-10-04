import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/amongus_baby.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} className="d-flex align-items-center">
            {<img src={logo} alt="Logo" className="mr-2 footer-logo" />}
            <h2>cozy</h2>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
              <a href="">
                <img src={navIcon1} />
              </a>
              <a href="">
                <img src={navIcon2} />
              </a>
              <a href="">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2023. All Rights Reserved by Cozy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
