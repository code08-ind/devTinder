const express = require('express')
const app = express();

app.use((req, res)=>{
    res.send("Hello, world!");
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
});



