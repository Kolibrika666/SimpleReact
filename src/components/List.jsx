import Container from 'react-bootstrap/Container';
import ListItem from './ListItem';

function List() {
  const listNums = ['1', '2', '3', '4', '5', '6', '7']
  return (
    <Container className="text-center w-50">
      <h5 className="text-center p-3 m-2">Список</h5>
      {listNums.map(el=><ListItem num={el}/>)}
    </Container>
  );
}

export default List;