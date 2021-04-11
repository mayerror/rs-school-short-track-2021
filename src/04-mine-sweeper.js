/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = [];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix[i] = new Array(matrix[0].length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        resultMatrix[i][j] = 1;
      } else {
        sum = 0;
        if (i >= 1 && j >= 1 && matrix[i - 1][j - 1] === true) {
          sum++;
        }
        if (i >= 1 && matrix[i - 1][j] === true) {
          sum++;
        }
        if (i >= 1 && j + 1 < matrix[0].length && matrix[i - 1][j + 1] === true) {
          sum++;
        }
        if (j + 1 < matrix[0].length && matrix[i][j + 1] === true) {
          sum++;
        }
        if (i + 1 < matrix.length && j + 1 < matrix[0].length && matrix[i + 1][j + 1] === true) {
          sum++;
        }
        if (i + 1 < matrix.length && matrix[i + 1][j] === true) {
          sum++;
        }
        if (i + 1 < matrix.length && j >= 1 && matrix[i + 1][j - 1] === true) {
          sum++;
        }
        if (j >= 1 && matrix[i][j - 1] === true) {
          sum++;
        }
        resultMatrix[i][j] = sum;
      }
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
