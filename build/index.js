"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([19, -5, 0, 5, 10, -20]));
console.log(sorter.sort().collection);
var sorter_characters = new Sorter_1.Sorter(new CharactersCollection_1.CharactersCollection('XaaaPoBaXB'));
console.log(sorter_characters.sort().collection);
