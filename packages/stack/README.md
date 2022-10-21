# dori.stack

<img src="https://img.shields.io/npm/v/dori.stack"> <img src="https://img.shields.io/npm/dw/dori.stack" > <img src="https://img.shields.io/bundlephobia/minzip/dori.stack?label=minzip">

A stack is an abstract data type that serves as a collection of elements in last in first out order.


## Install

```shell
$ npm i dori.stack
```

## Usage

### push and pop

```typescript
import { Stack } from 'dori.stack'

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.size() // 3
stack.empty() // false
stack.peek() // get 3
stack.toArray() // [1,2,3]

stack.pop() // return 3
stack.size() // 2
stack.empty() // false
stack.peek() // get 2
stack.toArray() // [1,2]
``` 


## API

```typescript
/**
 * Stack
 *
 * @template T - stack element type
 */
declare class Stack<T> {
    list: LinkedList<T>;
    /**
     * whether stack is empty
     */
    empty(): boolean;
    /**
     * size of stack
     *
     * @returns {number}
     */
    size(): number;
    /**
     * get the top element of stack, T = O(1)
     *
     * @returns {T | undefined}
     */
    peek(): T | null;
    /**
     * push element to the stack, T = O(1)
     *
     * @param {T} value
     * @returns {void}
     */
    push(value: T): void;
    /**
     * pop top element of stack, T = O(1)
     *
     * @returns {T | null}
     */
    pop(): T | null;
    /**
     * transform to Array, T = O(n)
     *
     * @returns {T[]}
     */
    toArray(): T[];
}

```