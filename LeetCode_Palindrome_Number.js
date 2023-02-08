/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(number) {
    var string = number.toString();
    var newString = string.split("").reverse().join("");
    if (string == newString) {
        return true;
    }
    else {
        return false;
    }
};