import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = () => {
  return (
    <Card>
      <Card.Img
        id="landing-logos"
        crossOrigin="anonymous"
        variant="top"
        src={"/images/landimages/meds.jpg"}
      />
      <Card.Body>
        <Card.Title>Medicine Shop</Card.Title>
        <LinkContainer to={`/product-list/category/Anesthetics`}>
          <Button variant="primary">Buy Medicines</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
