const express = require('express');
const app = express();
port = 8080;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hi');
})

app.listen(port,console.log('run in port 8080'));