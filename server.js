const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello Guigui');
})

app.listen(8000)