const express = require('express');




const app = express();


app.get("/",(req,res) => {
    res.send("hello");
});


app.listen(6969, ()=>
{
    console.log("server is listing on port 6969");
});