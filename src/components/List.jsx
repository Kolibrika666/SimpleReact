import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';

function List() {
  return (
<Container>
      <h5 className="text-center">Список</h5>
      <Row className="justify-content-md-center">
        <Col md="auto">1</Col>
        <Col md="auto">элемент</Col>
        <Col md="auto">списка</Col>
      </Row>
    </Container>
  );
}

export default List;