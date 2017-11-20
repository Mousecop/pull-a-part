const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const request = require('request');
const app = express();
const server = http.createServer(app);


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
    "Request-Sample" : {
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

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Server Running');
})

app.post('/api/vin-decode', (req, res) => {
    let vinNumber = req.body.vinNumber
    // console.log(req.body)

    request.post({
        url: `${DataOneURL}/?client_id=${clientId}&authorization_code=${authToken}&decoder_query=${dataOneQuery}`,
        headers: {
            "content-type": "application/json"
          }
        },
        (error, response, body ) => {
            console.log('ERROR:', error)
            console.log('RESPONSE CODE', response.statusCode);
            console.log('BODY', body)
            res.send('hflflifylifyifiyfyilffl')
        }
    )
})


server.listen(process.env.PORT || 3001, () => {
    console.log(`Server is Running on port: ${process.env.PORT || 3001}`)
});