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
                    I build software, and find bliss playing in the digital
                    sandbox know as code. Software development is an art form, a
                    bridge between imagination and reality, constructed with
                    elegant and functional solutions. With a strong foundation
                    in <b className="bolded">backend development</b> and growing
                    expertise in <b className="bolded">frontend design</b>, I
                    traverse that bridge often.
                  </p>
                  <p>
                    <b className="bolded">
                      From crafting sleek web applications to simulating human
                      emotion with the power of language models
                    </b>
                    , I follow my passion of experiencing, learning, and
                    creating.
                  </p>
                  <p>
                    Beyond the realm of software development, I seek expression
                    in other areas. Whether it's exploring our world, creating
                    and appreciating visual art, getting lost in novels,
                    refining my fashion, or adventuring in virtual universes,
                    I'm always finding beauty in this one life we have.
                  </p>
                  <p>
                    <b className="bolded">Let's connect</b> and appreciate the
                    synergy of art and technology. Together, we can leave a
                    positive mark on this evolving digital landscape.
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
