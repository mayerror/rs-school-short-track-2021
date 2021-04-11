/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  if (names.length > 0) {
    for (let i = 0; i < names.length; i++) {
      if (i === 0) {
        arr.push(names[i]);
      } else if (!arr.includes(names[i])) {
        arr.push(names[i]);
      } else {
        let index = 1;
        while (arr.includes(`${names[i]}(${index})`)) {
          index++;
        }
        arr.push(`${names[i]}(${index})`);
      }
    }
  }
  return arr;
}

module.exports = renameFiles;
