/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let newArr = [];
    let duplicateArr = arr1;
    for (let i = 0; i < arr2.length; i++) {
        for (let o = 0; o < arr1.length; o++) {
            if (arr2[i] === arr1[o]) {
                newArr.push(arr1[o]);
                duplicateArr.splice(o, 1);
            }
        }
    }
    console.log("New array is: " + newArr);
    console.log("Dupicate array is: " + duplicateArr);
    console.log("Returning: " + newArr.concat(duplicateArr.sort()));
    return newArr.concat(duplicateArr.sort());
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[ 2,1,4,3,9,6]);