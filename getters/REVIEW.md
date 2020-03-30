# functions-to-methods/

> 3/30/2020, 6:08:09 PM 

## getters/ - pass

* [../REVIEW.md](../REVIEW.md)

### files

* [refactor-1.js](#refactor-1js---pass) - pass
* [refactor-2.js](#refactor-2js---pass) - pass
* [refactor-3.js](#refactor-3js---pass) - pass

---

## refactor-1.js - pass

* [review source](refactor-1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
const obj1 = {
  name: 'obj1',
  getGreeting: function () {
    return `hi, I'm ${this.name}`;
  }
}

const obj2 = {
  name: 'obj2',
  get greeting() {
    // write me!
    return `hi, I'm ${this.name}`;
  }
}

const obj1Greeting1 = obj1.getGreeting();
const test1 = obj1Greeting1 === `hi, I'm obj1`;
console.assert(test1, 'Test 1');

const obj2Greeting1 = obj2.greeting; // fix this line!
const test2 = obj2Greeting1 === `hi, I'm obj2`;
console.assert(test2, 'Test 2');

obj1.name = "first";
obj2.name = "second";

const obj1Greeting2 = obj1.getGreeting();
const test3 = obj1Greeting2 === `hi, I'm first`;
console.assert(test3, 'Test 3');

const obj2Greeting2 = obj2.greeting; // fix this line!
const test4 = obj2Greeting2 === `hi, I'm second`;
console.assert(test4, 'Test 4');

```

[TOP](#functions-to-methods)

---

## refactor-2.js - pass

* [review source](refactor-2.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
+ PASS: Test 10
```

```js
const obj1 = {
  numbers: [12, 4, 9, 36, 7, 0, -2],
  modulo: 3,
  getZeroMods: function () {
    return this.numbers.filter(x => x % this.modulo === 0);
  }
}

const obj2 = {
  numbers: [12, 4, 9, 36, 7, 0, -2],
  modulo: 3,
  get zeroMods() {
    return this.numbers.filter(x => x % this.modulo === 0);
  }
}

const obj1mods3 = obj1.getZeroMods();
console.assert(obj1mods3[0] === 12, 'Test 1');
console.assert(obj1mods3[1] === 9, 'Test 2');
console.assert(obj1mods3[2] === 36, 'Test 3');

const obj2mods3 = obj2.zeroMods;
console.assert(obj2mods3[0] === 12, 'Test 4');
console.assert(obj2mods3[1] === 9, 'Test 5');
console.assert(obj2mods3[2] === 36, 'Test 6');


obj1.modulo = 6;
obj2.modulo = 6;

const obj1mods3second = obj1.getZeroMods();
console.assert(obj1mods3second[0] === 12, 'Test 7');
console.assert(obj1mods3second[1] === 36, 'Test 8');

const obj2mods3second = obj2.zeroMods;
console.assert(obj2mods3second[0] === 12, 'Test 9');
console.assert(obj2mods3second[1] === 36, 'Test 10');

```

[TOP](#functions-to-methods)

---

## refactor-3.js - pass

* [review source](refactor-3.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  getCurrentEntry: function () {
    return this.entries[this.currentKey];
  }
}

const obj2 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  get currentEntry () {
    return this.entries[this.currentKey];
  }
}

// fill in the blanks to pass the asserts:

const obj1current1 = obj1.getCurrentEntry();
console.assert(obj1current1 === 'bye!', 'Test 1');

const obj2current1 = obj2.currentEntry;
console.assert(obj2current1 === 'bye!', 'Test 2');

obj1.currentKey = 'first';
obj2.currentKey = 'first';

const obj1current2 = obj1.getCurrentEntry();
console.assert(obj1current2 === 'hi!', 'Test 3');

const obj2current2 = obj2.currentEntry;
console.assert(obj2current2 === 'hi!', 'Test 4');

```

[TOP](#functions-to-methods)

