import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ServicesComponent = () => {
  return (
    <Card>
      <Card.Img
        id="landing-logos"
        crossOrigin="anonymous"
        variant="top"
        src={"/images/landimages/appointments.jpg"}
      />
      <Card.Body>
        <Card.Title>Appointments</Card.Title>
        <LinkContainer to={`/appointments`}>
          <Button variant="primary">Book appointments</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default ServicesComponent;
