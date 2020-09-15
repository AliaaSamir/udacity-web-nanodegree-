// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, listening);
// server listening function
function listening(){
    console.log("server running"); 
    console.log("running on localhost:" + port );
}

// GET ROUTES
app.get('/allData', function (req, res) {
    res.send(projectData);
});


// POST ROUTS
app.post('/addWeather', function (req, res) {
    newEntryData = {
        temperature : req.body.temp,
        date : req.body.date,
        user_response : req.body.user_response
    }
    //console.log(newEntryData);
    //res.send('data recieved')
    projectData.push(newEntryData);
    //console.log(projectData);
});
  