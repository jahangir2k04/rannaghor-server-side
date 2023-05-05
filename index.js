const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

const chefData = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(chefData);
})

app.get('/chef-recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefData.find(cd => cd.chef_id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`RannaGhor API is running by port : ${port}`);
})