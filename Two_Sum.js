/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        for (let o = i + 1; o < nums.length; o++) {
            // console.log("The I is: " + nums[i] + " The o is: " + nums[o])
            if ((nums[i] + nums[o]) == target) {
                return [i,o]
            }
        }

    }
};

// twoSum([2,7,11,15], 9)
// console.log(twoSum([2,7,11,15], 9))