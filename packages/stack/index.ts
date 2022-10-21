import { LinkedList } from 'dori.linkedlist'

/**
 * Stack
 *
 * @template T - stack element type
 */
export class Stack<T> {
  list = new LinkedList<T>()

  /**
   * whether stack is empty
   */
  empty() {
    return !this.list.size()
  }

  /**
   * size of stack
   *
   * @returns {number}
   */
  size() {
    return this.list.size()
  }

  /**
   * get the top element of stack, T = O(1)
   *
   * @returns {T | undefined}
   */
  peek() {
    const head = this.list.head()

    return head ? head.value : null
  }

  /**
   * push element to the stack, T = O(1)
   *
   * @param {T} value
   * @returns {void}
   */
  push(value: T) {
    this.list.prepend(value)
  }

  /**
   * pop top element of stack, T = O(1)
   *
   * @returns {T | null}
   */
  pop() {
    const head = this.list.remove((_, index) => index === 0)

    return head ? head.value : null
  }

  /**
   * transform to Array, T = O(n)
   *
   * @returns {T[]}
   */
  toArray() {
    return this.list.toArray().reverse()
  }
}
