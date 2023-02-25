import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const EmergencyComponent = () => {
  
  return (
    <Card>
      {/* <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} /> */}
      <Card.Body>
        <Card.Title>Emergency</Card.Title>
        <LinkContainer to={`/emergency`}>
          <Button variant="primary">Book emergency</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default EmergencyComponent;
