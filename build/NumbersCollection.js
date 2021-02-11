"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [this.data[rightIndex], this.data[leftIndex]], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // length доступен как свойство объекта
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
