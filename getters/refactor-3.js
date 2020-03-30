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
  get CurrentEntry () {
    return this.entries[this.currentKey];
  }
}

// fill in the blanks to pass the asserts:

const obj1current1 = obj1.getCurrentEntry();
console.assert(obj1current1 === 'bye!', 'Test 1');

const obj2current1 = obj1.getCurrentEntry;
console.assert(obj2current1 === 'bye!', 'Test 2');

obj1.currentKey = obj1.getCurrentEntry();
obj2.currentKey = obj1.getCurrentEntry;

const obj1current2 = obj1.getCurrentEntry();
console.assert(obj1current2 === 'hi!', 'Test 3');

const obj2current2 = obj1.getCurrentEntry;
console.assert(obj2current2 === 'hi!', 'Test 4');
