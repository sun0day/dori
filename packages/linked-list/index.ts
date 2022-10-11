/**
 * node of linked list
 *
 * @template T - node value type
 */
export class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null

  /**
   * @param {T} value - node value
   * @param {LinkedListNode<T> | null} next - node next sibling
   */
  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value
    this.next = next
  }
}

/**
 * linked list
 *
 * @template T - linked list node value type
 */
export class LinkedList<T> {
  private _head: LinkedListNode<T> | null
  private _tail: LinkedListNode<T> | null
  private _size = 0

  private _wrapper(value: T | LinkedListNode<T>) {
    return value instanceof LinkedListNode ? value : new LinkedListNode(value)
  }

  constructor() {
    this._head = null
    this._tail = null
  }

  /**
   * insert a new node before linked list head node, T = O(1)
   *
   * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to prepend
   */
  prepend(value: T | LinkedListNode<T>) {
    const node = this._wrapper(value)
    node.next = this._head
    this._head = node

    if (!this._tail)
      this._tail = this._head

    this._size++
  }

  /**
   * insert a new node after linked list tail node, T = O(1)
   *
   * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to append
   */
  append(value: T | LinkedListNode<T>) {
    const node = this._wrapper(value)

    if (this._tail) {
      this._tail.next = node
      this._tail = node
    }
    else {
      this._tail = node
    }

    if (!this._head)
      this._head = this._tail

    this._size++
  }

  /**
   * insert a new node before nth node, T = O(n)
   *
   * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to insert
   * @param {number} index - index to insert \
   * if index <= 0, value will be inserted before head node \
   * if index >= list size, value will be insert after tail node
   */
  insert(value: T | LinkedListNode<T>, index: number) {
    if (index <= 0)
      return this.prepend(value)

    if (index >= this._size)
      return this.append(value)

    let count = 0; let cur = this._head

    while (count < index - 1) {
      cur = cur.next
      count++
    }

    const { next } = cur
    cur.next = this._wrapper(value)
    cur.next.next = next

    this._size++
  }

  /**
   * get head node
   *
   * @returns {LinkedListNode<T>}
   */
  head() {
    return this._head
  }

  /**
   * get tail node
   *
   * @returns {LinkedListNode<T>}
   */
  tail() {
    return this._tail
  }

  /**
   * get list size
   *
   * @returns {number}
   */
  size() {
    return this._size
  }

  /**
   * transform to array, T = O(n)
   *
   * @returns {T[]}
   */
  toArray() {
    const arr = [] as T[]
    let cur = this._head
    while (cur) {
      arr.push(cur.value)
      cur = cur.next
    }

    return arr
  }
}
