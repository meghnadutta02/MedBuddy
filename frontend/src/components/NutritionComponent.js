import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NutritionComponent = () => {
  
  return (
    <Card>
      {/* <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} /> */}
      <Card.Body>
        <Card.Title>nutrition</Card.Title>
        <LinkContainer to={`/nutrition`}>
          <Button variant="primary">nutrition button</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default NutritionComponent;