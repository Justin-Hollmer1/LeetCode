/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    console.log("Before condition")
    if (x > 2147483647 || x < -2147483648) {
        console.log("Condition hit")
        return 0;
    }
    let string = x.toString();
    let array = Array.from(string);
    let newString = "";
    if (array[0] === "-") {
        newString += "-";
        array.shift();
    }
    for (let i = array.length - 1; i >= 0; i--) {
        newString += array[i];
    }
    return(parseInt(newString))
};