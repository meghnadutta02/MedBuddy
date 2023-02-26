import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
export default function AppointmentComponent({
  index,
  doctor,
  specialty,
  date,
  time,
  image,
  Click,
}) {
  const [onclick, setClicked] = useState(false);
  function Click() {
    setClicked(true);
  }
  return (
    <Card key={index} className="pb-3" style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row className="justify-content-center">
        <Col lg={3} sm={4}>
          <Card.Img
            fluid
            crossOrigin="anonymous"
            variant="top"
            src={image}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>{doctor}</Card.Title>
            <Card.Text>{specialty}</Card.Text>
            <Card.Text className="h4">
              {date}, {time}
            </Card.Text>
            {onclick === false && (
              <Button onClick={Click} variant="primary">
                Book Appointment
              </Button>
            )}
            {onclick && (
              <>
              <Button onClick={Click} variant="primary" disabled>Booked </Button>
              <Alert className="mt-2" key={"success"} variant={"success"}>Your Appointment is booked!</Alert>
              </>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
