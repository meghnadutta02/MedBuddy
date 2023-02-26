import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NutritionComponent = () => {
  return (
    <Card>
      <Card.Img
        id="landing-logos"
        crossOrigin="anonymous"
        variant="top"
        src={"/images/landimages/nutrition.jpg"}
      />
      <Card.Body>
        <Card.Title>Meal Analysis</Card.Title>
        <LinkContainer to={`/nutrition`}>
          <Button variant="primary">Check</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default NutritionComponent;
