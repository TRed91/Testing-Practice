const analyzeArray = (arr) => {
    const average = calcAverage(arr);
    const max = getMax(arr);
    const min = getMin(arr);
    const length = arr.length;
    return { average, max, min, length}
}

const calcAverage = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum / arr.length;
}

const getMax = (arr) => {
    arr.sort();
    return arr[arr.length - 1];
}

const getMin = (arr) => {
    arr.sort();
    return arr[0];
}

module.exports = analyzeArray;

console.log(analyzeArray([1,8,3,4,2,6]));