exports.appName = "Calculator";

exports.add = function(val1, val2){
    return val1 + val2;
}

exports.subtract = function(val1, val2){
    return val1 - val2;
}

exports.multiply = function(val1, val2){
    return val1 * val2;
}

exports.divide = function(val1, val2){
    if(val2 != 0){
        return val1 / val2;
    }else{
        return 0;
    }
}
