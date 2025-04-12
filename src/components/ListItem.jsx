import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListItem(props) {
  return (
      <Row className="justify-content-md-center bg-primary-subtle gap-3">
        <Col md="auto bg-white">{props.num}</Col>
        <Col md="auto bg-white">элемент</Col>
        <Col md="auto bg-white">списка</Col>
      </Row>
  );
}

export default ListItem;