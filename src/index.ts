import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'

const sorter = new Sorter(new NumbersCollection([19, -5, 0, 5, 10, -20]));
sorter.sort();
console.log(sorter.collection);