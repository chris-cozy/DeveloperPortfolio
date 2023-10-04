import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/amongus_baby.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Effect that triggers on scroll past a certain point (50 px)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // We must remove the listener when the component gets removed from the DOM
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    // Alter navbar class based on scroll
    <Navbar expand="lg" className={` ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#about" className="d-flex align-items-center">
          {
            <img
              src={logo}
              alt="Logo"
              className="mr-2"
              style={{ height: "80px", width: "80px" }}
            />
          }
          <h2>cozy</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="d-none d-lg-flex navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-none d-lg-flex me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {`// About`}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {`// Skills`}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {`// Projects`}
            </Nav.Link>
          </Nav>
          <span className="d-none d-lg-flex navbar-text">
            <div className="social-icon">
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
            <button
              className="vvd"
              onClick={() => {
                const connectSection = document.getElementById("connect");
                if (connectSection) {
                  connectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Connect With Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
