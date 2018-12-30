import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Expenses from './components/Expenses';
import AddExpense from './components/AddExpense';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Expenses}/>
        <Route exact path='/add' component={AddExpense}/>
      </div>
    );
  }
}

export default App;
