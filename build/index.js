"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
/* const sorter_number = new Sorter(new NumbersCollection([19, -5, 0, 5, 10, -20]));
console.log(sorter.sort().collection);

const sorter_characters = new Sorter(new CharactersCollection('XaaaPoBaXB'));
console.log(sorter_characters.sort().collection); */
var list = new LinkedList_1.LinkedList();
list.add(8).add(-3).add(15).add(0);
var sorter_list = new Sorter_1.Sorter(list);
console.log(sorter_list.sort().collection);
list.print();
