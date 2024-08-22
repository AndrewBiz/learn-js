// const myArray = [];

// myArray[0] = "andrew";
// myArray[1] = 146;
// myArray[2] = false;

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);

// myArray.push("shkola");
// console.log(myArray);
// let aa = myArray.pop();
// console.log(myArray);
// console.log(aa);

// myArray.unshift("shkola2");
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// myArray.splice(1, 1, 42, 43, 44);
// console.log(myArray);

// const myArray = ["a", "b", "c", "d", "e", "f"];
// console.log(myArray);

// const okurok = myArray.slice(2, 4);
// console.log(okurok);

// const newStr = myArray.join("_");
// console.log(newStr);

// const myArray2 = newStr.split("_");
// console.log(myArray2);

const myArrayA = ["a", "b", "c"];
const myArrayB = ["d", "e", "f"];
const sum1 = myArrayA + myArrayB;
console.log(typeof sum1);
console.log(sum1);

const sum2 = myArrayB.concat(myArrayA);
console.log(typeof sum2);
console.log(sum2);

const sum3 = [...myArrayA, ...myArrayB];
console.log(typeof sum3);
console.log(sum3);

const sum4 = [myArrayA, myArrayB, myArrayA];
console.log(typeof sum4);
console.log(sum4);
console.log(sum4[1][1]);
