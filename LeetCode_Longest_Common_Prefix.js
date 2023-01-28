/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let escapeCondition = false;
    let count = 0;
    if (strs.length === 1) {
        return strs[0];
    } else if (strs[0] === "") {
        return "";
    }
    for (let i = 0; i < strs[0].length; i++) {
        let placeHolder = strs[0][count];
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][count] !== placeHolder) {
                return prefix;
            }
        }
        count += 1;
        prefix += placeHolder;
        if (count === strs.length) {
            escapeCondition = true;
        }
    }
    return prefix;
};