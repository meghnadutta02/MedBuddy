import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const InfoComponent = () => {
  
  return (
    <Card>
      {/* <Card.Img crossOrigin="anonymous" variant="top" src={category.image ?? null} /> */}
      <Card.Body>
        <Card.Title>Info</Card.Title>
        <LinkContainer to={`/information`}>
          <Button variant="primary">Book Info</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default InfoComponent;
