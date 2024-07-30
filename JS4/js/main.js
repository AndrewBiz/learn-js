const myVar1 = 42;
const myVar2 = 42.0003;
const myVar3 = "42.0003";

console.log(myVar1);
console.log(myVar2);
console.log(myVar3);

// console.log(myVar2.toString === myVar3);
// console.log(myVar2 === Number(myVar3));
// console.log(Number.isInteger(myVar2));
// console.log(Number.parseFloat(myVar3));
console.log(typeof Number.parseFloat(myVar3).toFixed(1));

//!!!!! Suka
console.log(Number.isNaN("Andrew"));
console.log(isNaN("Andrew"));
