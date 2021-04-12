/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let parts = [];
  const obj = {};
  domains.forEach((domain) => {
    parts = domain.split('.').reverse();
    let cash = '';
    parts = parts.map((part) => {
      cash = `${cash}.${part}`;
      return cash;
    });
    parts.forEach((item) => {
      if (obj[item] === undefined) {
        obj[item] = 1;
      } else {
        obj[item] += 1;
      }
    });
  });
  return obj;
}

module.exports = getDNSStats;
