import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/amogus_black_cat.png";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Banner.css";

export const Banner = () => {
  // Index of rotate array
  const [loopNum, setLoopNum] = useState(0);
  // Is deleting word
  const [isDeleting, setIsDeleting] = useState(false);
  // How fast a new letter appears
  const [delta, setDelta] = useState(150);
  // Current typed text
  const [text, setText] = useState("");

  useEffect(() => {
    const toRotate = ["Software Engineer", "Web Developer", "Game Developer"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];

      // If word being deleted, updated word is one letter less, otherwise one letter more
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);
      if (isDeleting) {
        setDelta((prevDelta) => 75);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);

        setDelta(1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting]);

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="banner-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  {/*<span className="tagline left-aligned">
                    Welcome to Cozy Space
                </span>*/}
                  <h1>
                    {`I'm Cozy, a `}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I build software, and find pure bliss in the digital sandbox
                    of coding. Software development is an art form, a bridge
                    between imagination and reality, constructured with elegant
                    and functional solutions. With a strong foundation in
                    backend development, growing experience in frontend
                    development, and knowledge in many computer science
                    specializations, I walk that bridge daily. Whether I'm
                    crafting a sleek web application or optimizing hidden
                    algorithms, I'm fueled by the drive to learn and create
                    something extraordinary.
                  </p>
                  <p>
                    When I'm not lost in the world of code, I'm often exploring
                    and creating art, reading novels, deepening my sense of
                    fashion, or exploring virtual worlds.
                  </p>
                  {/*
                  <button
                    onClick={() => {
                      console.log("connect");
                    }}
                  >
                    Connect With Me <ArrowRightCircle size={25} />
                  </button>
                */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="banner-col">
            {<img src={headerImg} alt="Header" />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
