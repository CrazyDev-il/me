import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Container from '../src/components/container/Container';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.scrollRef = React.createRef();
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App" ref={this.scrollRef}>
        <Header scrollRef={this.scrollRef}></Header>
        <Container></Container>
      </div>
    );
  }
}

export default App;
