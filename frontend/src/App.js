import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Expenses from './components/Expenses';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Expenses}/>
      </div>
    );
  }
}

export default App;
