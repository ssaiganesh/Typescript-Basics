"use strict";
// let id: number = 5; // no need to specify number it may automatically detect
// console.log("ID:", id);
// Basic Types
let id = 5;
let company = "Sai";
let isPublished = true;
let x = "hllo";
let age;
let ids = [1, 2, 3, 4, 5];
ids.push(13); // cannot push any other type other than number
let arr = [1, true, "Hello"];
// Tuple
let person = [25, "Sai", true]; // expected in that particular order
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
];
// Union
let refId = 22; // can set as string or number
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
function log(message) {
    // void type is anything noticed that even if never include return type still no error
    console.log(message);
}
log(123);
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
console.log(brad.name);
// console.log(brad.id); // cannot do this when id is private
console.log(mike.register());
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const ganesh = new Person1(1, "Ganesh");
console.log(ganesh.register());
// Sub Classes
class Emloyee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Emloyee(2, "Travis", "Manager");
// Generics
function altgetArray(items) {
    return new Array().concat(items);
}
let altnumArray = altgetArray([1, 2, 3, 4]);
let altstringArray = altgetArray(["John", "Joe", "Jane"]);
altnumArray.push("Hello"); // Does not give error as any type in get array so instead can use Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // now only can push same type
let stringArray = getArray(["john", "joe", "jane"]);
