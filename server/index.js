const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const ac = require('./Controllers/animalController');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get('/api/getanimals', ac.getAnimals)
app.post('/api/addanimals', ac.addAnimal)
app.delete('/api/deleteanimals',ac.deleteAnimal)
app.put('api/updateanimals',ac.updateAnimal)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})