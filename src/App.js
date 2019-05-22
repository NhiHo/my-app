import React,{ Component } from 'react';
import './App.css';

import Persons from './container/Persons/Persons';
import AddPerson from './components/AddPerson/AddPerson';
import Person from './components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPerson AddPerson />
        <Person Person />
        <Persons Persons />
      </div>
      
    );
  };
}

export default App;
