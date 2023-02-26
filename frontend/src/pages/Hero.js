import React from "react";
import { BiPhoneCall, BiLogInCircle } from "react-icons/bi";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <Container fluid className="py-5 " id="home">
      <div className="align-items-center">
        <Col>
        <Container>
        <Row md={6}>
          <div className="py-5">
          <h1 className="display-4" style={{fontSize: "4rem"}}>Welcome</h1>
          </div>
        </Row>
        {/* <Row md={6}> */}
          <div className="py-5">
          <h2 className="mb-4" style={{fontSize: "3rem"}}>One stop medical hub</h2>
            <p className="lead mb-4">Find all the necessary services</p>
            <div>
              <Col>
              <Button variant="primary" className="mr-3">
                <span className="mr-2">
                  <BiPhoneCall size={30} />
                </span>
                Call us
              </Button>
              </Col>
             
            </div>
          </div>
          
        {/* </Row> */}
        </Container>
        </Col>
        <Col>
        {/* <img src={cover} className="w-100" alt="" /> */}
        </Col>

      </div>
    </Container>
  );
};

export default Hero;

