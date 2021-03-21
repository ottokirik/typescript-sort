"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return this;
            ;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
        return this;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var tail = this.head;
            while (tail.next) {
                length += 1;
                tail = tail.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds.');
        }
        var currentIndex = 0;
        var node = this.head;
        while (node) {
            if (currentIndex === index) {
                return node;
            }
            currentIndex += 1;
            node = node.next;
        }
        throw new Error('Index out of bounds.');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty.');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        if (!this.head) {
            throw new Error('List is empty');
        }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        _a = [rightNode.data, leftNode.data], leftNode.data = _a[0], rightNode.data = _a[1];
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return console.log('List is empty');
        }
        var node = this.head;
        var listString = "";
        while (node) {
            listString = listString + " " + node.data;
            node = node.next;
        }
        console.log("[" + listString + "]");
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
