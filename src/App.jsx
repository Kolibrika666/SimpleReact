import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import TextBlock from "./components/TextBlock";
import { Table } from "react-bootstrap";
import List from "./components/List";

function App() {
  return (
    <Container className="p-3 bg-light">
      <Header/>
      <TextBlock/>
      <List/>
    </Container>
  );
}

export default App;
