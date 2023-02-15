/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    let previousNumber;
    for (let i = 0; i < nums.length; i++) {
        if (previousNumber !== null && previousNumber === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
        previousNumber = nums[i]
    }
    console.log(nums)
};