const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false})); //middleware


app.listen(3000, function(){
    console.log('Server listening on port 3000....');
});