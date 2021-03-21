import { Sortable } from './Sorter';

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList implements Sortable {
    head: Node | null = null;
    
    add(data: number): LinkedList {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            return this;;
        }

        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
        return this;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let tail = this.head;

        while (tail.next) {
            length += 1;
            tail = tail.next;
        }

        return length;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds.');
        }

        let currentIndex = 0;
        let node: Node | null = this.head;

        while(node) {
            if (currentIndex === index) {
                return node;
            }

            currentIndex += 1;
            node = node.next;
        }

        throw new Error('Index out of bounds.');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty.');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        if (!this.head) {
            throw new Error('List is empty');
        }
        
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }

    print(): void {
        if (!this.head) {
            return console.log('List is empty');
        }

        let node: Node | null = this.head;
        let listString = ``;

        while(node) {
            listString = `${listString} ${node.data}`;
            node = node.next;
        }

        console.log(`[${listString}]`);
    }
}