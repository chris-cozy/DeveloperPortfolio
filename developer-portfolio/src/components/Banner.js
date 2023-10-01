import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  // Animation Setup
  const toRotate = [
    "Software Engineer",
    "Web Developer",
    "Software Experimentalist",
  ];
  // Index of rotate array
  const [loopNum, setLoopNum] = useState(0);
  // Is deleting word
  const [isDeleting, setIsDeleting] = useState(false);
  // How fast a new letter appears
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  // Current typed text
  const [text, setText] = useState("");
  // Time between each word
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    // If word being deleted, updated word is one letter less, otherwise one letter more
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to the Cozy Space</span>
            <h1>
              {`Hey I'm Cozy, a `}
              <span className="txt-rotate">
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>This part is about me, read it thoroughly</p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              Connect With Me <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
