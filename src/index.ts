import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter'
import { LinkedList } from './LinkedList';

/* const sorter_number = new Sorter(new NumbersCollection([19, -5, 0, 5, 10, -20]));
console.log(sorter.sort().collection);

const sorter_characters = new Sorter(new CharactersCollection('XaaaPoBaXB'));
console.log(sorter_characters.sort().collection); */

const list = new LinkedList();

list.add(8).add(-3).add(15).add(0);

const sorter_list = new Sorter(list);
console.log(sorter_list.sort().collection);

list.print();