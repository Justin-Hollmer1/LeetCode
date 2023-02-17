/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    let num1 = x.toString(2);
    let num2 = y.toString(2);
    while (num1.length != num2.length) {
        if (num1.length > num2.length) {
            num2 = "0" + num2;
        } else {
            num1 = "0" + num1;
        }
    }
    if (num1.length > num2.length) {
        for (let i = 0; i < num1.length; i++) {
            if (num1[i] !== num2[i]) {
                count += 1;
            }
        }
    } else {
        for (let i = 0; i < num2.length; i++) {
            if (num1[i] !== num2[i]) {
                count += 1;
            }
        }
    }
    console.log("Num 1 is: " + num1);
    console.log("Num 2 is: " + num2);
    return count;
};