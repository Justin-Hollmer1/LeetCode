/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arrayValues = [];
    for (let i = 0; i < numRows; i++) {
        arrayValues.push([]);
    }
    console.log(arrayValues)
    for (let i = 0; i < numRows; i++) {
        arrayValues[i].push(1);
        for (let o = 0; o < arrayValues[i]; i++) {
        }
    }
    console.log(arrayValues);
};

generate(5)