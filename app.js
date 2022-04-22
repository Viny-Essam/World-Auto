const express = require ('express');
const app = express();


app.get('/names', (req, res)=>{
    res.send('PIM PROJECT');
})

app.listen(5000, ()=>{
    console.log("running on world"); 
})

