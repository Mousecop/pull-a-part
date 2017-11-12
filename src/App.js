import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SampleMessage from "./sample-in";

const DataOneURL = 'https://api.dataonesoftware.com/webservices/vindecoder/decode';
const clientId = '3578';
const authToken = '8c35d0f3436d10b99b54de831db5885f0bca1a5e';
const dataOneQuery = JSON.stringify({
  "decoder_settings" : {
    "display" : "full",
    "version" : "7.0.1",
    "styles" : "off",
    "common_data" : "on",
    "common_data_packs" : {
     "basic_data" : "on",
     "pricing" : "off",
     "engines" : "off",
     "transmissions" : "off",
     "specifications" : "off",
     "standard_specifications" : "off",
     "optional_specifications" : "off",
     "standard_ancillary_specifications" : "off",
     "optional_ancillary_specifications" : "off",
     "installed_equipment" : "off",
     "optional_equipment" : "off",
     "colors" : "off",
     "safety_equipment" : "off",
     "warranties" : "off",
     "fuel_efficiency" : "off",
     "green_scores" : "off",
     "crash_test" : "off",
     "awards" : "off"
     }
 },
 "query_requests" : {
    "Request" : {
     "vin" : "1FADP3E22DL309391",
     "year" : "",
     "make" : "",
     "model" : "",
     "trim" : "",
     "model_number" : "",
     "package_code" : "",
     "drive_type" : "",
     "vehicle_type" : "",
     "body_type" : "",
     "body_subtype" : "",
     "doors" : "",
     "bedlength" : "",
     "wheelbase" : "",
     "msrp" : "",
     "invoice_price" : "",
     "engine" : {
      "description" : "",
      "block_type" : "",
      "cylinders" : "",
      "displacement" : "",
      "fuel_type" : ""
     },
     "transmission" : {
      "description" : "",
      "trans_type" : "",
      "trans_speeds" : ""
     },
     "optional_equipment_codes" : "",
     "installed_equipment_descriptions" : "",
     "interior_color" : {
      "description" : "",
      "color_code" : ""
     },
     "exterior_color" : {
      "description" : "",
      "color_code" : ""
     }
    }
 }
})


class App extends Component {

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log('Submit works!')

    fetch(`${DataOneURL}/?client_id=${clientId}&authorization_code=${authToken}&decoder_query=${dataOneQuery}`, {
      method: 'POST'
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
          <input type="text"/>
          <input type="submit"/>
        </form>
        
      </div>
    );
  }
}

export default App;
