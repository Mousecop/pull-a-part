import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('Submit works!')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pull-A-Part!</h1>
        </header>
        <p className="App-intro">
          To get started, type in a VIN number below!
        </p>

        <form onSubmit={(event) => this.onSubmitHandler(event)}>
          <input type="text"/>
          <input type="submit"/>
        </form>
        
      </div>
    );
  }
}

export default App;
