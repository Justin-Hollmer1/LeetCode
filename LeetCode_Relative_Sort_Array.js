/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let newArr = [];
    let duplicateArr = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
        for (let o = 0; o < arr1.length; o++) {
            if (arr2[i] === arr1[o]) {
                newArr.push(arr1[o]);
                duplicateArr.splice(o, 1, "Test");
                // console.log("GOOD: arr2[" + i + "] is: " + arr2[i] + " and arr1["+ o + "] is: " + arr1[o])
            }
            else {
                // console.log("BAD: arr2[" + i + "] is: " + arr2[i] + " and arr1["+ o + "] is: " + arr1[o])
            }
            // console.log("arr1 is: " + arr1);
            // }
            // console.log("DuplicateArr is: " + duplicateArr);
            // console.log("The newArr is: " + newArr);
        }
        // console.log("New array is: " + newArr);
        // console.log("Dupicate array is: " + duplicateArr);
    }
    // Now to remove all of the 0 values from the duplicate array.
    // duplicateArr = duplicateArr.sort();
    // console.log("Before the loop, duplicate array is: " + duplicateArr)
    // while (isNaN(duplicateArr[0])) {
    //     duplicateArr.shift();
    // }

    for (let i = 0; i < duplicateArr.length; i++) {
        if (isNaN(duplicateArr[i])) {
            // console.log("Hit")
            duplicateArr.splice(i, 1);
            i--;
        }
        // console.log("New duplicate array is: " + duplicateArr);
    }



    // console.log("Duplicate array is: " + duplicateArr.sort(function(a, b){return a - b}));
    // console.log("Returning: " + newArr.concat(duplicateArr.sort(function(a, b){return a - b})));
    return newArr.concat(duplicateArr.sort(function(a, b){return a - b}));
};