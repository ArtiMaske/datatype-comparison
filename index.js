function isEqual(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  } else {
    const isObject = (obj) => {
      return Object.prototype.toString.call(obj) === "[object Object]";
    };
    if (!isObject(obj1) || !isObject(obj2)) {
      return false;
    }
    let len = null;

    //check if they're of the same length
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    } else {
      len = JSON.stringify(obj1).length; //use any length
    }
    let match = 0; //store number of matched properties
    let stringified = JSON.stringify(obj1);

    let i = 0;
    //loop through the variable
    while (i < stringified.length) {
      //check if character exists in the other object
      if (JSON.stringify(obj2).includes(stringified[i])) {
        match++; //increment the variable
      }
      i++;
    }
    //check if object length equals the number of matched properties
    if (match === len) {
      return true;
    }
    return false;
  }
}

console.log(isEqual({ a: 1 }, { a: 1 })); //true
console.log(isEqual({ a: 1 }, { a: 2 })); //false
console.log(isEqual({ a: 1 }, { b: 2 })); //false
console.log(isEqual({ a: 1 }, { a: 1, b: 2 })); //false
console.log(isEqual({ a: 1, b: 2 }, { a: 1 })); //false
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); //true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); //false
console.log(isEqual(true, true)); //true
console.log(isEqual(false, true)); //false
console.log(isEqual(1, 1)); //true
console.log(isEqual(1, 2)); // false
console.log(isEqual([], [])); //true
console.log(isEqual([1, 2], [1, 2])); //true
console.log(isEqual([1, 2], null)); //false
console.log(isEqual([{ a: 1, b: 2 }], [{ a: 1, b: 2 }])); //true
console.log(isEqual([{ a: 1, b: 2 }], [{ a: 1, b: 2, c: 3 }])); //false
console.log(
  isEqual([{ a: 1, b: 3, c: { a: "b" } }], [{ a: 1, b: 3, c: { a: "c" } }])
); //false
console.log(
  isEqual(
    [{ a: 1, b: 3, c: { a: "c", b: [{ a: 4 }] } }],
    [{ a: 1, b: 3, c: { a: "c", b: [{ a: 4 }] } }]
  )
); //true
console.log(
  isEqual(
    [{ a: 1, b: 3, c: { a: "c", b: [{ a: "4" }] } }],
    [{ a: 1, b: 3, c: { a: "c", b: [{ a: 4 }] } }]
  )
); //false
