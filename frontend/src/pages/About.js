import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="py-5" id="about">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">About Us</h1>
          <p className="lead mb-4">
          Welcome to Med Buddy, 
          your one-stop online platform for managing your medication 
          regimen and improving your overall health!
          </p>
          <p className="lead mb-4">
          We understand that keeping track of your medications can be overwhelming and time-consuming, 
          which is why we have developed an easy-to-use tool to help you manage your medications more effectively. 
          Our platform provides a personalized medication schedule, reminders, and easy prescription refills, all in one place.
          </p>
          <p className="lead">
          With Med Buddy, you can input all of your medications, including over-the-counter drugs, and supplements, and we'll keep track of them for you.
          Our intuitive interface makes it easy to set up reminders for when it's time to take your medication, so you never forget a dose again. Plus, 
          you can easily share your medication list with your healthcare provider, ensuring that everyone is on the same page about your treatment plan.
          </p>
          <p className="lead">
          Our platform also offers a comprehensive health tracker, where you can input your vital signs and track your progress over time. 
          This can help you monitor your overall health, detect any potential health issues early, and make more informed decisions about your lifestyle.
          </p>
          <p className="lead">
          At Med Buddy, we're committed to helping you take control of your health.
           Our platform is designed to be user-friendly and accessible to everyone, regardless of age or technical ability.
           With Med Buddy, you can rest assured that your medication management and health tracking are in good hands.
          </p>
          <p className="lead">
          Join Med Buddy today and take the first step towards a healthier, happier you!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;