import { LinkedList } from 'dori.linkedlist'

/**
 * Queue
 *
 * @template T - queue element type
 */
export class Queue<T> {
  list = new LinkedList<T>()

  /**
   * whether queue is empty
   */
  empty() {
    return !this.list.size()
  }

  /**
   * size of queue
   *
   * @returns {number}
   */
  size() {
    return this.list.size()
  }

  /**
   * get the head element of queue, T = O(1)
   *
   * @returns {T | undefined}
   */
  peek() {
    const head = this.list.head()

    return head ? head.value : null
  }

  /**
   * add tail element to the queue, T = O(1)
   *
   * @param {T} value
   * @returns {void}
   */
  enqueue(value: T) {
    this.list.append(value)
  }

  /**
   * remove head element of queue, T = O(1)
   *
   * @returns {T | null}
   */
  dequeue() {
    const head = this.list.remove((_, index) => index === 0)

    return head ? head.value : null
  }

  /**
   * transform to Array, T = O(n)
   *
   * @returns {T[]}
   */
  toArray() {
    return this.list.toArray()
  }
}
