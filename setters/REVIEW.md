# functions-to-methods/

> 3/30/2020, 6:08:09 PM 

## setters/ - pass

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
  greeting: ``,
  setGreetingName: function (newName) {
    this.greeting = `hi, I'm ${newName}!`;
  }
};

const obj2 = {
  greeting: ``,
  set greetingName(newName) {
    // write me!
    this.greeting = `hi, I'm ${newName}!`;
  }
};

obj1.setGreetingName('obj1');
console.assert(obj1.greeting === "hi, I'm obj1!", 'Test 1');

obj2.greetingName = 'obj2'; // write this line
console.assert(obj2.greeting === "hi, I'm obj2!", 'Test 2');

obj1.setGreetingName('hi');
console.assert(obj1.greeting === "hi, I'm hi!", 'Test 3');

obj2.greetingName = 'bye'; // write this line
console.assert(obj2.greeting === "hi, I'm bye!", 'Test 4');

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
  modulo: 3,
  set moduloo(newModulo) {
    this.modulo = newModulo;
    this.mods = this.numbers.map(x => x % this.modulo);
  }

}


obj1.setModulo(3);
obj2.moduloo = 3; // write this line

const test1 = JSON.stringify(obj1.mods) === '[0,1,0,0]';
console.assert(test1, 'Test 1');

const test2 = JSON.stringify(obj2.mods) === '[0,1,0,0]';
console.assert(test2, 'Test 2');


obj1.setModulo(2);
obj2.moduloo = 2; // write this line

const test3 = JSON.stringify(obj1.mods) === '[0,0,1,0]';
console.assert(test3, 'Test 3');

const test4 = JSON.stringify(obj2.mods) === '[0,0,1,0]';
console.assert(test4, 'Test 4');


obj1.modulo = 6;
obj2.modulo = 6;

const test5 = JSON.stringify(obj1.mods) === "[0,0,1,0]";
console.assert(test5, "Test 5");

const test6 = JSON.stringify(obj2.mods) === "[0,0,1,0]";
console.assert(test6, "Test 6");

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
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
+ PASS: Test 10
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

const obj2 = {
  entries: { first: 'hi!', second: 'bye!' },
  current: {},
  set currentEntry (key) {
    if (this.entries.hasOwnProperty(key)) {
      this.current = { [key]: this.entries[key] };
    } else {
      this.current = { [key]: `no entry with key "${key}"` }
    }
  }
}

obj1.setCurrentEntry('second');
console.assert(obj1.current.second === "bye!", 'Test 1');

obj2.currentEntry = 'second'; // write this line
console.assert(obj2.current.second === "bye!", 'Test 2');


obj1.setCurrentEntry('first');
console.assert(obj1.current.first === "hi!", 'Test 3');
console.assert(obj1.current.hasOwnProperty('second') === false, 'Test 4');

obj2.currentEntry = 'first'; // write this line
console.assert(obj2.current.first === "hi!", 'Test 5');
console.assert(obj2.current.hasOwnProperty('second') === false, 'Test 6');


obj1.setCurrentEntry('hi');
console.assert(obj1.current.hi === 'no entry with key "hi"', 'Test 7');
console.assert(obj1.current.hasOwnProperty('first') === false, 'Test 8');

obj2.currentEntry = 'hi'; // write this line
console.assert(obj2.current.hi === 'no entry with key "hi"', 'Test 9');
console.assert(obj2.current.hasOwnProperty('first') === false, 'Test 10');

```

[TOP](#functions-to-methods)

