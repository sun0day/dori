# dori.linkedlist

<img src="https://img.shields.io/npm/v/dori.linkedlist">
<img src="https://img.shields.io/npm/dw/dori.linkedlist" >
<img src="https://img.shields.io/bundlephobia/minzip/dori.linkedlist?label=bundle">

<br>

A linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next.


## Install

```shell
$ npm i dori.linkedlist
```

## Usage

```typescript
import { LinkedList, LinkedListNode } from 'dori.linkedlist'

// create a LinkedList
const list = new LinkedList<number>()

list.append(1) // LinkedListNode(1)
list.append(new LinkedListNode(2)) // LinkedListNode(1) -> LinkedListNode(2)
list.append(new LinkedListNode(3)) // LinkedListNode(1) -> LinkedListNode(2) -> LinkedListNode(3)
list.toArray() // [1, 2, 3]
```

## API

```typescript
/**
 * node of linked list
 *
 * @template T - node value type
 */
declare class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    /**
     * @param {T} value - node value
     * @param {LinkedListNode<T> | null} next - node next sibling
     */
    constructor(value: T, next?: LinkedListNode<T> | null);
}
/**
 * linked list
 *
 * @template T - linked list node value type
 */
declare class LinkedList<T> {
    private _head;
    private _tail;
    private _size;
    private _wrapper;
    /**
     * create LinkedList from array, T = O(n)
     *
     * @template T
     * @param {T[]} values - node value set
     * @returns {LinkedList<T>}
     */
    static from<T>(values: T[]): LinkedList<T>;
    constructor();
    /**
     * find node, T = O(n)
     *
     * @param {LinkedListNode<T>) => boolean} compare - find node which matches `compare`
     * @returns {LinkedListNode<T> | null} - return founded node, if node not exist, return null
     */
    find(compare: (node: LinkedListNode<T>) => boolean): LinkedListNode<T>;
    /**
     * insert a new node before linked list head node, T = O(1)
     *
     * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to prepend
     */
    prepend(value: T | LinkedListNode<T>): void;
    /**
     * insert a new node after linked list tail node, T = O(1)
     *
     * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to append
     */
    append(value: T | LinkedListNode<T>): void;
    /**
     * insert a new node before nth node, T = O(n)
     *
     * @param {T | LinkedListNode<T>} value - LinkedListNode or other type value to insert
     * @param {number} index - index to insert \
     * if index <= 0, value will be inserted before head node \
     * if index >= list size, value will be insert after tail node
     */
    insert(value: T | LinkedListNode<T>, index: number): void;
    /**
     * remove node, T = O(n)
     *
     * @param {LinkedListNode<T>) => boolean} compare - node which matches `compare` will be removed
     * @returns {LinkedListNode<T> | null} - return removed node, if node not exist, return null
     */
    remove(compare: (node: LinkedListNode<T>) => boolean): LinkedListNode<T>;
    /**
     * reverse a linked list, T = O(n)
     *
     * @returns {LinkedList<T>} - linked list after reverse
     */
    reverse(): void;
    /**
     * get head node
     *
     * @returns {LinkedListNode<T>}
     */
    head(): LinkedListNode<T>;
    /**
     * get tail node
     *
     * @returns {LinkedListNode<T>}
     */
    tail(): LinkedListNode<T>;
    /**
     * get list size
     *
     * @returns {number}
     */
    size(): number;
    /**
     * transform to array, T = O(n)
     *
     * @returns {T[]}
     */
    toArray(): T[];
}
```