import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer > 
      <Container fluid>
        <Row className="mt-5">
          <Col className="text-center py-5" style={{
      backgroundColor: "rgb(84,192,192,1)",
      boxShadow: "1px 1px 15px 0",
    }}>
            Copyright &copy; MedBuddy
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
