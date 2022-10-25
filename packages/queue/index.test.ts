import { Queue } from './index'

describe('Queue', () => {
  it('should enqueue and dequeue', () => {
    const queue = new Queue<number>()
    expect(queue.size()).toBe(0)
    expect(queue.empty()).toBeTruthy()
    expect(queue.peek()).toBeNull()
    expect(queue.dequeue()).toBeNull()
    expect(queue.toArray()).toEqual([])

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.size()).toBe(3)
    expect(queue.empty()).toBeFalsy()
    expect(queue.peek()).toBe(1)
    expect(queue.toArray()).toEqual([1, 2, 3])

    expect(queue.dequeue()).toBe(1)
    expect(queue.size()).toBe(2)
    expect(queue.peek()).toBe(2)
    expect(queue.empty()).toBeFalsy()
    expect(queue.toArray()).toEqual([2, 3])
  })
})
