# functions-to-methods/

> 3/30/2020, 5:39:34 PM 

## setters/ - error

* [../REVIEW.md](../REVIEW.md)

### files

* [refactor-1.js](#refactor-1js---fail) - fail
* [refactor-2.js](#refactor-2js---error) - error
* [refactor-3.js](#refactor-3js---error) - error

---

## refactor-1.js - fail

* [review source](refactor-1.js)

```txt
+ PASS: Test 1
- FAIL: Test 2
+ PASS: Test 3
- FAIL: Test 4
```

```js
const obj1 = {
  greeting: ``,
  setGreetingName: function (newName) {
    this.greeting = `hi, I'm ${newName}!`;
  }
};

const obj2 = {
  greeting: ``,
  set greetingName(newName) {
    // write me!
  }
};

obj1.setGreetingName('obj1');
console.assert(obj1.greeting === "hi, I'm obj1!", 'Test 1');

; // write this line
console.assert(obj2.greeting === "hi, I'm obj2!", 'Test 2');

obj1.setGreetingName('hi');
console.assert(obj1.greeting === "hi, I'm hi!", 'Test 3');

; // write this line
console.assert(obj2.greeting === "hi, I'm bye!", 'Test 4');

```

[TOP](#functions-to-methods)

---

## refactor-2.js - error

* [review source](refactor-2.js)

```txt
+ PASS: Test 1
- FAIL: Test 2
+ PASS: Test 3
- FAIL: Test 4
ReferenceError: __ is not defined
    at Object.<anonymous> ( [...] \setters\refactor-2.js:41:45)
    at Module._compile (internal/modules/cjs/loader.js:1157:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1177:10)
    at Module.load (internal/modules/cjs/loader.js:1001:32)
    at Function.Module._load (internal/modules/cjs/loader.js:900:14)
    at Module.require (internal/modules/cjs/loader.js:1043:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at evaluateFile ( [...] \review.js:101:5)
    at  [...] \review.js:139:28
    at Array.map (<anonymous>)
```

```js
const obj1 = {
  numbers: [12, 4, 9, 36],
  mods: [],
  modulo: 3,
  setModulo: function (newModulo) {
    this.modulo = newModulo;
    this.mods = this.numbers.map(x => x % this.modulo);
  }
}

const obj2 = {
  numbers: [12, 4, 9, 36],
  mods: [],
  _modulo: 3
}


obj1.setModulo(3);
; // write this line

const test1 = JSON.stringify(obj1.mods) === '[0,1,0,0]';
console.assert(test1, 'Test 1');

const test2 = JSON.stringify(obj2.mods) === '[0,1,0,0]';
console.assert(test2, 'Test 2');


obj1.setModulo(2);
; // write this line

const test3 = JSON.stringify(obj1.mods) === '[0,0,1,0]';
console.assert(test3, 'Test 3');

const test4 = JSON.stringify(obj2.mods) === '[0,0,1,0]';
console.assert(test4, 'Test 4');


obj1.modulo = 6;
obj2.modulo = 6;

const test5 = JSON.stringify(obj1.mods) === __;
console.assert(test5, 'Test 5');

const test6 = JSON.stringify(obj2.mods) === __;
console.assert(test6, 'Test 6');

```

[TOP](#functions-to-methods)

---

## refactor-3.js - error

* [review source](refactor-3.js)

```txt
+ PASS: Test 1
TypeError: Cannot read property 'second' of undefined
    at Object.<anonymous> ( [...] \setters\refactor-3.js:19:29)
    at Module._compile (internal/modules/cjs/loader.js:1157:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1177:10)
    at Module.load (internal/modules/cjs/loader.js:1001:32)
    at Function.Module._load (internal/modules/cjs/loader.js:900:14)
    at Module.require (internal/modules/cjs/loader.js:1043:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at evaluateFile ( [...] \review.js:101:5)
    at  [...] \review.js:139:28
    at Array.map (<anonymous>)
```

```js
const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  current: {},
  setCurrentEntry: function (key) {
    if (this.entries.hasOwnProperty(key)) {
      this.current = { [key]: this.entries[key] };
    } else {
      this.current = { [key]: `no entry with key "${key}"` }
    }
  }
}

const obj2 = {}

obj1.setCurrentEntry('second');
console.assert(obj1.current.second === "bye!", 'Test 1');

; // write this line
console.assert(obj2.current.second === "bye!", 'Test 2');


obj1.setCurrentEntry('first');
console.assert(obj1.current.first === "hi!", 'Test 3');
console.assert(obj1.current.hasOwnProperty('second') === false, 'Test 4');

; // write this line
console.assert(obj2.current.first === "hi!", 'Test 5');
console.assert(obj2.current.hasOwnProperty('second') === false, 'Test 6');


obj1.setCurrentEntry('hi');
console.assert(obj1.current.hi === 'no entry with key "hi"', 'Test 7');
console.assert(obj1.current.hasOwnProperty('first') === false, 'Test 8');

; // write this line
console.assert(obj2.current.hi === 'no entry with key "hi"', 'Test 9');
console.assert(obj2.current.hasOwnProperty('first') === false, 'Test 10');

```

[TOP](#functions-to-methods)

