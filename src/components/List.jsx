import Container from 'react-bootstrap/Container';
import ListItem from './ListItem';

function List() {
  const listNums = ['1', '2', '3', '4', '5', '6', '7']
  return (
    <Container>
      <h5 className="text-center">Список</h5>
      {listNums.map(el=><ListItem num={el}/>)}
    </Container>
  );
}

export default List;