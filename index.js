const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false})); //middleware 


app.listen(3000, () =>{
    console.log('Server listening on port 3000....');
});


app.post('/', (req,res) =>{
    let operation = req.query.operation;
    let value_1 = parseInt(req.query.value_1);
    let value_2 = parseInt(req.query.value_2);
    let isSuccess = true;
    let resultStr = "Operation: ";
    let result = 0;

    if( operation == "add" ){
        resultStr += "Addition";

    }else if( operation == "sub"){
        resultStr += "Subtraction";

    }else if( operation == "mul"){
        resultStr += "Multipy";

    }else if( operation == "div"){
        resultStr += "Divide";

    }else{
        isSuccess = false;
    }

    if(isSuccess){
        resultStr += "\nValue 1: " +value_1+ "\nValue 2: " +value_2+ "\nResult: " + result;
        console.log(resultStr);
        res.send('Successfully completed operation.\n' + resultStr);
    }else{
        console.log('Invalid operation.');
        res.send('Invalid operation.');
    }
});

