import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SampleMessage from "./sample-in";




class App extends Component {

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('Input Ref', this.vinInput.value)
    fetch('/api/vin-decode', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({vinNumber: this.vinInput.value})
    }).then(response => {
      console.log('FETCH RESPONSE:', response)
      return response.json()
      .then(body => {
        console.log('FETCH RESPONSE BODY', body)
      })
    }).catch(err => {
      console.log('FETCH ERROR:', err)
    })
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
          <input type="text" ref={ref => this.vinInput = ref}/>
          <input type="submit"/>
        </form>
        
      </div>
    );
  }
}

export default App;
