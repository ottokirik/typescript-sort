import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([2, -10, 0, 50, -20]);
numberCollection.sort().print();

const characters = new CharactersCollection('AbpPAaaXXb');
characters.sort().print();

const list = new LinkedList();
list.add(8).add(-3).add(15).add(0).sort().print();
