import React from 'react';
import Homecards from './components/Homecards/';
import Header from './components/Header/';
import { Container } from 'react-bootstrap';
import './style.scss';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Homecards />
      </Container>
    </div>
  );
}

export default App;
