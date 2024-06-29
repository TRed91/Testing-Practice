function capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

function reverse(string){
    const arrFromString = string.split("");
    let arrReversed = [];
    for (let i = arrFromString.length - 1; i >= 0; i--){
        arrReversed.push(arrFromString[i]);
    }
    return arrReversed.join("");
}

const calculator = {
    add(a, b){
        if(!isNaN(a) && !isNaN(b))
            return a + b;
        else
            return "invalid arguments"
    },

    subtract(a, b){
        if(!isNaN(a) && !isNaN(b))
            return a - b;
        else
            return "invalid arguments"
    },

    multiply(a, b){
        if(!isNaN(a) && !isNaN(b))
            return a * b;
        else
            return "invalid arguments"
    },

    divide(a, b){
        if(!isNaN(a) && !isNaN(b)){
            let result = a / b;
            return parseFloat(result.toFixed(3))
        }
        else {
            return "invalid arguments"
        }     
    }
}

module.exports = { capitalize, reverse, calculator };