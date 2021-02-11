import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
    constructor (public data: number[]) {}

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex], this.data[leftIndex]];
    }

    // length доступен как свойство объекта
    get length(): number {
        return this.data.length;
    }
}