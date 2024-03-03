import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";


function LandingPage() {
  const heroAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 800,
  });

  const planeAnimation = useSpring({
    from: { transform: "translateY(-100px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    delay: 1000,
  });

  return (
    <div>
      <Container fluid className="hero">
        <animated.div style={heroAnimation}>
          <Row className="text-center">
            <Col>
              <h1 className="display-4">Welcome to AirBooking</h1>
              <p className="lead">Book your flights with ease</p>
              <Button
                as={Link}
                to="/register"
                variant="primary"
                size="lg"
                className="mt-3"
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </animated.div>
      </Container>

      <Container>
        <Row className="my-5">
          <Col>
            <animated.h2 style={textAnimation}>Why Choose Us?</animated.h2>
            <animated.ul style={textAnimation}>
              <li>Wide range of destinations</li>
              <li>Competitive prices</li>
              <li>Easy booking process</li>
              <li>Excellent customer service</li>
            </animated.ul>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <animated.h2 style={textAnimation}>Popular Airlines</animated.h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.gettyimages.com/id/73730231/photo/munich-germany-an-airbus-a380-comes-into-land-for-the-first-time-at-franz-josef-strauss-airport.jpg?s=612x612&w=0&k=20&c=vVBgWwnKY_l3QF6wDNYIfJKh0hU2wLDqGDR-FL-0s_A="
                  alt="Airline 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.gettyimages.com/id/157727486/photo/flying-airbus-a380.jpg?s=612x612&w=0&k=20&c=_59OGD0bfzB5b40CKqwa_okRbvCqSfvKyyPSVIVgYhc="
                  alt="Airline 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.gettyimages.com/id/77205423/photo/san-francisco-the-airbus-a380-flies-over-san-francisco-as-part-of-the-citys-fleet-week-october.jpg?s=612x612&w=0&k=20&c=2cKA6mBIu02Fl3vFf9kvJULSbbsYbkyrFwsFcvMTCOU="
                  alt="Airline 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.gettyimages.com/id/82084101/photo/hamburg-germany-an-airbus-a380-is-seen-july-28-2008-in-hamburg-germany-the-worlds-largest.jpg?s=612x612&w=0&k=20&c=OMPD30j6W5DWJ3KgMOmxZVOzUMxCc8bCgBgEeC2jNH8="
                  alt="Airline 1"
                />
              </Carousel.Item>
              {/* Add more carousel items */}
            </Carousel>
          </Col>
        </Row>

        <Row className="my-5">
          <Col className="text-center">
            <animated.h2 style={textAnimation}>
              Book Your Flight Today
            </animated.h2>
            <animated.img
              src="https://media.gettyimages.com/id/82929253/photo/sydney-australia-a-general-view-of-the-new-business-class-seats-onboard-the-new-qantas-a380.jpg?s=612x612&w=0&k=20&c=fm0kmNZXl_07dRfIvkgHpWsdEk4tmlehKKj06DLGG50="
              alt="Plane Icon"
              className="img-fluid mt-3"
              style={planeAnimation}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
