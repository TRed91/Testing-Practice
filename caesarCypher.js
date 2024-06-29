const caesarCipher = (string, shift) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g",
                      "h", "i", "j", "k", "l", "m", "n",
                      "o", "p", "q", "r", "s", "t", "u",
                      "v", "w", "x", "y", "z"];
    let arrFromString = string.split("");
    let newArr = [];
    for (let i = 0; i < arrFromString.length; i++){
        if (isIncluded(arrFromString[i], alphabet)) {
            for(let j = 0; j < alphabet.length; j++){
                const toShift = calcShift(j, shift, alphabet);
                if (arrFromString[i] === alphabet[j]) {
                    newArr.push(alphabet[toShift])
                } else if (arrFromString[i].toUpperCase() === alphabet[j].toUpperCase()){
                    newArr.push(alphabet[toShift].toUpperCase())                
                }
            }
        } else {
            newArr.push(arrFromString[i]);
        }
    }
    return newArr.join("");
}

const isIncluded = (input, alphabet) => {
    let upperCaseAlphabet = [];
    alphabet.forEach( e => upperCaseAlphabet.push(e.toUpperCase()));
    if (alphabet.includes(input) || upperCaseAlphabet.includes(input))
        return true;
    else
        return false;
}

const calcShift = (iterator, shift, alphabet) => {
    if (iterator + shift < alphabet.length){
        return iterator + shift
    } else {
        return (iterator + shift) - alphabet.length;
    }
}

module.exports = caesarCipher;