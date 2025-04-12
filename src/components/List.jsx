import Container from 'react-bootstrap/Container';
import ListItem from './ListItem';

function List() {
  return (
    <Container>
      <h5 className="text-center">Список</h5>
      <ListItem num="1"/>
    </Container>
  );
}

export default List;