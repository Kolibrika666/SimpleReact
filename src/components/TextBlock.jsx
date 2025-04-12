import Accordion from 'react-bootstrap/Accordion';

function TextBlock() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Абзац текста</Accordion.Header>
        <Accordion.Body>
          Абзац текста Абзац текста  Абзац текста  Абзац текста 
          Абзац текста Абзац текста Абзац текста Абзац текста
          Абзац текста Абзац текста Абзац текста Абзац текста 
          Абзац текста Абзац текста  Абзац текста  Абзац текста 
          Абзац текста Абзац текста Абзац текста Абзац текста
          Абзац текста Абзац текста Абзац текста Абзац текста 
          Абзац текста Абзац текста  Абзац текста  Абзац текста 
          Абзац текста Абзац текста Абзац текста Абзац текста
          Абзац текста Абзац текста Абзац текста Абзац текста 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default TextBlock;