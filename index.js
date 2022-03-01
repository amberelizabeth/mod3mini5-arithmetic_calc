const express = require('express');
const app = express();
const myCalculator = require('./calculator');

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
    let errorStr = "";

    if( isNaN(value_1) || isNaN(value_2)){
        let invalidParam = (isNaN(value_1)) ? 'value_1' : 'value_2';
        errorStr = `Invalid parameter: ${invalidParam}.  Could not complete operation.`;
        isSuccess = false;
    }else{
        if( operation == "add" ){
            result = myCalculator.add(value_1,value_2);
            resultStr += "Addition";

        }else if( operation == "sub"){
            result = myCalculator.subtract(value_1,value_2);
            resultStr += "Subtraction";

        }else if( operation == "mul"){
            result = myCalculator.multiply(value_1,value_2);
            resultStr += "Multipy";

        }else if( operation == "div"){
            result = myCalculator.divide(value_1,value_2);
            resultStr += "Divide";

        }else{
            isSuccess = false;
            errorStr = "Invalid operation."
        }
    }
    if(isSuccess){
        resultStr += `\nValue 1:  ${value_1}\nValue 2: ${value_2}\nResult: ${result}`;
        console.log(resultStr);
        res.send('Successfully completed operation.\n' + resultStr);
    }else{
        console.log(errorStr);
        res.send(errorStr);
    }
});

