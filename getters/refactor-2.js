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
