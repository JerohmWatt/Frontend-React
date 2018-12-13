import React, { Component } from 'react';
import '../assets/css/App.css';
import Route from '../Route';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lastname : "franklin",
    }
  }

  

  render() {
    return (
      
      <div>
        <Route />
      </div>
    );
  }
}

export default App;
