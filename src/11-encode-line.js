/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  const arr = (`${str}]`).split('');
  const res = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      if (count === 0) {
        count = 2;
      } else {
        count++;
      }
    } else if (count === 0) {
      res.push(arr[i - 1]);
    } else {
      res.push(count + arr[i - 1]);
      count = 0;
    }
  }
  return res.join('');
}

module.exports = encodeLine;
