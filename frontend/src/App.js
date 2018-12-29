import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Expenses from './components/Expenses';
import CreateButton from './components/CreateButton';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <CreateButton/>
        <Expenses/>
      </div>
    );
  }
}

export default App;
