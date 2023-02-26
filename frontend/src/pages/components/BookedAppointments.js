import React from 'react'
import { Row,Col,Table} from 'react-bootstrap'
export default function BookedAppointments(props) {
  return (
    <Row className="justify-content-center">
    <Col lg={9}>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Doctor</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Dr. Smith</td>
        <td>March 1st, 2023</td>
        <td>10:00 AM</td>
      </tr>
    </tbody>
  </Table>
  </Col>
  </Row>
  )
}
