import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NutritionComponent = () => {
  return (
    <Card>
      {/* <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} /> */}
      <Card.Body>
        <Card.Title>Food Nutrition</Card.Title>
        <LinkContainer to={`/nutrition`}>
          <Button variant="primary">Check</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default NutritionComponent;
