"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter(new NumbersCollection_1.NumbersCollection([19, -5, 0, 5, 10, -20]));
sorter.sort();
console.log(sorter.collection);
