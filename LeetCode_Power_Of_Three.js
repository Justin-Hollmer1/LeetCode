/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(1) {
        console.log("N is: " + n)
        if (n === 0) {
            return false;
        }
        else if (n === 1) {
            return true;
        }
        else if (n % 3 !== 0) {
            return false;
        }
        else if (n % 3 === 0) {
            n = n / 3;
        }
    }
};