const express = require('express');


const imageCtrl = require('./controllers/imageCtrl');
const app = express();

const SERVER_PORT = 3001;

app.get(`/api/superhero/images`, imageCtrl.getHeroImage);


app.listen(SERVER_PORT, () =>{
    console.log(`Server is running on port: ${SERVER_PORT}`)
});