import {useState, } from 'react';

import './App.css';

import { Container, Row, Col, Button, } from 'react-bootstrap';

const colors = {
  0: 'backgroundGreen',
  1: 'backgroundRed',
  2: 'backgroundBlue',
  3: 'backgroundYellow',
  4: 'backgroundBlack'
}

function App() {

  const [currentColor, setCurrentColor] = useState(0);

  const changeColor = (color) => setCurrentColor(currentColorState => color);

  return (
    <div className={`App ${colors[currentColor]}`}>
      <div className="App-header">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className="buttonChangeColor" >
            <Button variant="danger" onClick={() => changeColor(1)}>Fondo rojo</Button>
          </Col>
          <Col xs={12} md={6} lg={3} className="buttonChangeColor" >
            <Button variant="primary" onClick={() => changeColor(2)}>Fondo azul</Button>
          </Col>
          <Col xs={12} md={6} lg={3} className="buttonChangeColor" >
            <Button variant="warning" onClick={() => changeColor(3)}>Fondo amarillo</Button>
          </Col>
          <Col xs={12} md={6} lg={3} className="buttonChangeColor" >
            <Button variant="dark" onClick={() => changeColor(4)}>Fondo negro</Button>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
