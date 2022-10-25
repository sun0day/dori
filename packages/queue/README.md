# dori.queue

<img src="https://img.shields.io/npm/v/dori.queue"> <img src="https://img.shields.io/npm/dw/dori.queue" > <img src="https://img.shields.io/bundlephobia/minzip/dori.queue?label=minzip">

A queue is an abstract data type that serves as a collection of elements in first in first out order.


## Install

```shell
$ npm i dori.queue
```

## Usage

### enqueue and dequeue

```typescript
import { Queue } from 'dori.queue'

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.size() // 3
queue.empty() // false
queue.peek() // get 1
queue.toArray() // [1,2,3]

queue.dequeue() // return 1
queue.size() // 2
queue.empty() // false
queue.peek() // get 2
queue.toArray() // [2,3]
``` 


## API

```typescript
/**
 * Queue
 *
 * @template T - queue element type
 */
declare class Queue<T> {
    list: LinkedList<T>;
    /**
     * whether queue is empty
     */
    empty(): boolean;
    /**
     * size of queue
     *
     * @returns {number}
     */
    size(): number;
    /**
     * get the head element of queue, T = O(1)
     *
     * @returns {T | undefined}
     */
    peek(): T | null;
    /**
     * add tail element to the queue, T = O(1)
     *
     * @param {T} value
     * @returns {void}
     */
    enqueue(value: T): void;
    /**
     * remove head element of queue, T = O(1)
     *
     * @returns {T | null}
     */
    dequeue(): T | null;
    /**
     * transform to Array, T = O(n)
     *
     * @returns {T[]}
     */
    toArray(): T[];
}
```