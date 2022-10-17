const express = require('express');
const app = express();
const currenttime = require("./router/time");

app.use("/", (req, res, next) =>{
    var auth = {
        authorised : true,
    }
    if(auth.authorised){
        next();
    } else {
        res.send("Not Authorised");
    }
});

app.use("/file", currenttime);


app.listen(process.env.PORT || 4000, () => {

    console.log("Server Connected.");
  });