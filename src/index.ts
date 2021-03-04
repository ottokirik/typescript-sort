import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter'

const sorter = new Sorter(new NumbersCollection([19, -5, 0, 5, 10, -20]));
console.log(sorter.sort().collection);

const sorter_characters = new Sorter(new CharactersCollection('XaaaPoBaXB'));
console.log(sorter_characters.sort().collection);