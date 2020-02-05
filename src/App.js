import React from 'react';
import './App.scss';
import Header from './components/header/header';
import crawler from './images/crawler.svg';
import Container from '../src/components/container/Container';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <img src={crawler} className="bgImage" style={{ transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 9, 15, 0, 1)'}}/>
        <div className="content-container">
          {/* <div>Some Content</div> */}
        </div>
      </div>
      <Container></Container>
    </div>
  );
}

export default App;
