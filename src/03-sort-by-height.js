/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrRes = [];
  let j = 0;
  const { length } = arr;
  const arrPos = arr.map((item, index) => {
    if (item === -1) {
      return index;
    } return -1;
  }).filter((item) => (item !== -1));
  const arrF = arr.filter((item) => {
    if (item !== -1) {
      return true;
    } return false;
  });
  arrF.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (arrPos.includes(i)) {
      arrRes.push(-1);
    } else {
      arrRes.push(arrF[j]);
      j++;
    }
  }
  return arrRes;
}

module.exports = sortByHeight;
