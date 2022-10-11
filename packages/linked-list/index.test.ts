import { LinkedList, LinkedListNode } from './index'

describe('LinkedList', () => {
  it('should prepend', () => {
    const list = new LinkedList<number>()
    list.prepend(1)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(1)
    expect(list.size()).toBe(1)
    expect(list.toArray()).toEqual([1])

    list.prepend(new LinkedListNode(2))
    expect(list.head().value).toBe(2)
    expect(list.tail().value).toBe(1)
    expect(list.size()).toBe(2)
    expect(list.toArray()).toEqual([2, 1])
  })

  it('should append', () => {
    const list = new LinkedList<number>()
    list.append(1)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(1)
    expect(list.size()).toBe(1)
    expect(list.toArray()).toEqual([1])

    list.append(new LinkedListNode(2))
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(2)
    expect(list.size()).toBe(2)
    expect(list.toArray()).toEqual([1, 2])
  })

  it('should insert', () => {
    const list = new LinkedList<number>()
    list.insert(1, 0)

    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(1)
    expect(list.size()).toBe(1)
    expect(list.toArray()).toEqual([1])

    list.insert(2, 1)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(2)
    expect(list.size()).toBe(2)
    expect(list.toArray()).toEqual([1, 2])

    list.insert(new LinkedListNode(3), 1)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(2)
    expect(list.size()).toBe(3)
    expect(list.toArray()).toEqual([1, 3, 2])

    list.insert(new LinkedListNode(4), 2)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(2)
    expect(list.size()).toBe(4)
    expect(list.toArray()).toEqual([1, 3, 4, 2])

    list.insert(new LinkedListNode(5), 4)
    expect(list.head().value).toBe(1)
    expect(list.tail().value).toBe(5)
    expect(list.size()).toBe(5)
    expect(list.toArray()).toEqual([1, 3, 4, 2, 5])
  })
})
