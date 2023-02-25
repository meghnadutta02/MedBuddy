import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MentalHealthComponent = () => {
  
  return (
    <Card>
      {/* <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} /> */}
      <Card.Body>
        <Card.Title></Card.Title>
        <LinkContainer to={`/mental-health`}>
          <Button variant="primary">Book MentalHealth</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default MentalHealthComponent;
