/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  return n.split('-').every((item) => {
    if (!Number.isNaN(parseInt(`0x${item}`, 16))) {
      const mediate = parseInt(`0x${item}`, 16);
      return (Number.isFinite(mediate) && mediate >= 0x00 && mediate <= 0xff);
    } return false;
  });
}

module.exports = isMAC48Address;
