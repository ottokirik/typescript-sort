"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split('');
        _a = [characters[rightIndex], characters[leftIndex]], characters[leftIndex] = _a[0], characters[rightIndex] = _a[1];
        this.data = characters.join('');
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;