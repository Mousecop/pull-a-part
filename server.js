const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(cors())
app.use(bodyParser.json())
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Server Running');
})







server.listen(process.env.PORT || 3001, () => {
    console.log(`Server is Running on port: ${process.env.PORT || 3001}`)
});