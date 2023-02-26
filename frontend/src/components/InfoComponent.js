import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const InfoComponent = () => {
  return (
    <Card>
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src="/images/landimages/hospital.jpg"
      />
      <Card.Body>
        <Card.Title>Healthcare Facility Details</Card.Title>
        <LinkContainer to={`/information`}>
          <Button variant="primary">Show Info</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default InfoComponent;
