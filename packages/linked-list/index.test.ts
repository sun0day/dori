import { LinkedList, LinkedListNode } from './index'

describe('LinkedList', () => {
  it('should find', () => {
    const list = LinkedList.from([1, 2, 3])

    expect(list.find(node => node.value === 2).value).toBe(2)
    expect(list.find(node => node.value === 4)).toBeNull()
  })

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

  it('should remove', () => {
    const list = LinkedList.from([1, 2, 3, 4])
    let removed = list.remove(node => node.value === 1)
    expect(removed.value).toBe(1)
    expect(removed.next).toBe(null)
    expect(list.head().value).toBe(2)
    expect(list.tail().value).toBe(4)
    expect(list.size()).toBe(3)
    expect(list.toArray()).toEqual([2, 3, 4])

    removed = list.remove(node => node.value === 3)
    expect(removed.value).toBe(3)
    expect(removed.next).toBe(null)
    expect(list.head().value).toBe(2)
    expect(list.tail().value).toBe(4)
    expect(list.size()).toBe(2)
    expect(list.toArray()).toEqual([2, 4])

    removed = list.remove((node, index) => index === 1)
    expect(removed.value).toBe(4)
    expect(removed.next).toBe(null)
    expect(list.head().value).toBe(2)
    expect(list.tail().value).toBe(2)
    expect(list.size()).toBe(1)
    expect(list.toArray()).toEqual([2])

    removed = list.remove((node, index) => index === 0)
    expect(removed.value).toBe(2)
    expect(removed.next).toBe(null)
    expect(list.head()).toBeNull()
    expect(list.tail()).toBeNull()
    expect(list.size()).toBe(0)
    expect(list.toArray()).toEqual([])

    removed = list.remove(node => node.value === 5)
    expect(removed).toBeNull()
    expect(list.head()).toBeNull()
    expect(list.tail()).toBeNull()
    expect(list.size()).toBe(0)
    expect(list.toArray()).toEqual([])
  })

  it('should reverse', () => {
    let list = new LinkedList()
    list.reverse()
    expect(list.toArray()).toEqual([])

    list = LinkedList.from([1])
    list.reverse()
    expect(list.toArray()).toEqual([1])
    expect(list.tail().value).toBe(1)

    list = LinkedList.from([1, 2, 3])
    list.reverse()
    expect(list.toArray()).toEqual([3, 2, 1])
    expect(list.tail().value).toBe(1)
  })
})
