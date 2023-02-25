import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
export default function AppointmentComponent({index, doctor, specialty, date, time,Click }) {
  return (

        <Card key={index} style={{ marginTop: "30px", marginBottom: "50px" }}>
          <Row className='justify-content-center'>
            <Col lg={3}>
              <Card.Img
                fluid
                crossOrigin="anonymous"
                variant="top"
                src={"/images/doctor.jpg"}
              />
            </Col>
            <Col lg={7}>
              <Card.Body>
                <Card.Title>{doctor}</Card.Title>
                <Card.Text>{specialty}</Card.Text>
                <Card.Text className="h4">
                  {date}, {time}
                </Card.Text>
                <Button onClick={()=>Click()} variant="primary">Book Appointment</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
  );
}
