import {useState, useEffect, } from 'react';

import './App.css';

import { Container, Row, Col, Button, } from 'react-bootstrap';

const colors = {
  0: 'green',
  1: 'red',
  2: 'blue',
  3: 'yellow',
  4: 'black'
}

function App() {

  const [currentColor, setCurrentColor] = useState(0);

  const changeColor = (color) => setCurrentColor(currentColorState => color);

  return (
    <div className="App" style={{ backgroundColor: colors[currentColor], minHeight: '100vh' }}>
      <div className="App-header">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Button variant="danger" onClick={() => changeColor(1)}>Warning</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="primary" onClick={() => changeColor(2)}>Primary</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="warning" onClick={() => changeColor(3)}>Warning</Button>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Button variant="dark" onClick={() => changeColor(4)}>Dark</Button>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
