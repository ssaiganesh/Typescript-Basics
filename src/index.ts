// let id: number = 5; // no need to specify number it may automatically detect
// console.log("ID:", id);

// Basic Types
let id: number = 5;
let company: string = "Sai";
let isPublished: boolean = true;
let x: any = "hllo";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
ids.push(13); // cannot push any other type other than number
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [25, "Sai", true]; // expected in that particular order

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
];

// Union
let refId: string | number = 22; // can set as string or number

// Enum
enum Direction1 {
  Up = 1, // by default starts with 0
  Down,
  Left,
  Right,
}
// console.log(Direction1.Down);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 3));

function log(message: string | number): void {
  // void type is anything noticed that even if never include return type still no error
  console.log(message);
}
log(123);

// Interfaces

interface UserInterface {
  readonly id: number; // cannot change the id
  name: string;
  age?: number; // optional in interface
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// Object can do this union type but not interface
type Point = number | string;
const p1: Point = 1;

// Interface Function

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
  private id: number; // can only be accessed within class, protected within this class or any class extended from this class
  name: string;
  constructor(id: number, name: string) {
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

// Class Interface

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number; // can only be accessed within class, protected within this class or any class extended from this class
  name: string;
  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Emloyee(2, "Travis", "Manager");

// Generics
function altgetArray(items: any[]): any[] {
  return new Array().concat(items);
}

let altnumArray = altgetArray([1, 2, 3, 4]);
let altstringArray = altgetArray(["John", "Joe", "Jane"]);

altnumArray.push("Hello"); // Does not give error as any type in get array so instead can use Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]); // now only can push same type
let stringArray = getArray<string>(["john", "joe", "jane"]);
