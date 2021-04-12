/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let arr =[];
  while (l.next != null) {
    if (l.value === k) {
      l = l.next;
      continue;
    } else {
      arr.push(l.value);
      l = l.next;
    }
  }
  return arr.reverse().reduce((acc,cur) => {
    if (acc) {
      const node = new LisrNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}

module.exports = removeKFromList;
