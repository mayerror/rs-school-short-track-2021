/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = String(n);
  let arr = str.split('');
  let sum = 0;
  while (arr.length !== 1) {
    sum = arr.reduce((prev, cur) => Number(prev) + Number(cur));
    arr = Array.from(String(sum));
  }
  return Number(arr[0]);
}

module.exports = getSumOfDigits;
