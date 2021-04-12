const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let x = this.value;
    let count = 0;
    while (x !== undefined && x !== null) {
      count++;
      x = x.next;
    }
    return count;
  }

  enqueue(element) {
    if (this.size !== 0) {
      let x = this.value;
      while (x.next !== null) {
        x = x.next;
      }
      x.next = new ListNode(element);
    } else {
      this.value = new ListNode(element);
    }
  }

  dequeue() {
    let result = 0;
    if (this.size !== 0) {
      result = this.value.value;
      this.value = this.value.next;
    }
    return result;
  }
}

module.exports = Queue;
