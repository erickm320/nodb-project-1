const express = require('express');


const imageCtrl = require('./controllers/imageCtrl');
const favCtrl = require('./controllers/favCtrl');
const app = express();

const SERVER_PORT = 3001;
app.use(express.json());

app.get(`/api/superhero/images`, imageCtrl.getHeroImage);

app.get('/api/fav-hero', favCtrl.getHero);
app.post('/api/fav-hero', favCtrl.addHero);
app.delete('/api/fav-hero', favCtrl.forgetHero);
app.put('/api/fav-hero', favCtrl.editHero)





app.listen(SERVER_PORT, () =>{
    console.log(`Server is running on port: ${SERVER_PORT}`)
});