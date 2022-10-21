import { Stack } from './index'

describe('Stack', () => {
  it('should push and pop', () => {
    const stack = new Stack<number>()
    expect(stack.size()).toBe(0)
    expect(stack.empty()).toBeTruthy()
    expect(stack.peek()).toBeNull()
    expect(stack.pop()).toBeNull()
    expect(stack.toArray()).toEqual([])

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.size()).toBe(3)
    expect(stack.empty()).toBeFalsy()
    expect(stack.peek()).toBe(3)
    expect(stack.toArray()).toEqual([1, 2, 3])

    expect(stack.pop()).toBe(3)
    expect(stack.size()).toBe(2)
    expect(stack.empty()).toBeFalsy()
    expect(stack.toArray()).toEqual([1, 2])
  })
})
