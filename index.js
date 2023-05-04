const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;

app.get('/', (req, res) => {
    res.send('RannaGhor is running')
})

app.listen(port, () => {
    console.log(`RannaGhor API is running by port : ${port}`);
})