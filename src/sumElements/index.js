/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
    let map = arr.map(val => {
        if (isFinite(val) || parseInt(val, 10)) {
            return parseFloat(val) || parseInt(val, 10) || parseInt(val, 16);
        }
    });
    
    return map.filter(val => val !== undefined).reduce((a, b) => a + b, 0);
};

export default sumElements;
