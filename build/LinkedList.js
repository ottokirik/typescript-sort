"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
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
}());
exports.LinkedList = LinkedList;
