/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  /* your logic here...*/
    let map = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] !== undefined ? res.push([map[arr[i]], arr[i]]) : map[base - arr[i]] = arr[i];
    }
    
    return res[0];
};

export default twoSums;
