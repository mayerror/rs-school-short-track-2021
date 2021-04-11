/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = `${n}`;
  let arr = [];
  let min = 0;
  arr = string.split('');
  min = arr.reduce((accumulator, currentValue) => {
    if (currentValue < accumulator) {
      return currentValue;
    } return accumulator;
  }, 9);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === min) {
      arr.splice(i, 1);
      break;
    }
  }
  return Number(arr.join(''));
}

// console.log(deleteDigit(152));

module.exports = deleteDigit;
