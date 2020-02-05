import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Container from '../src/components/container/Container';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
    </div>
  );
}

export default App;
