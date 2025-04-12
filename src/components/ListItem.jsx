import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListItem(props) {
  return (
      <Row className="justify-content-md-center">
        <Col md="auto">{props.num}</Col>
        <Col md="auto">элемент</Col>
        <Col md="auto">списка</Col>
      </Row>
  );
}

export default ListItem;