// alert("hello");
// let myBool = confirm("?");
// console.log(myBool);
let myName = prompt("your name");
myName = (myName ?? "").trim();
if (myName.length === 0) {
  myName = "lopuh";
}
console.log(myName);

// if (myName) {
//   myName = "lopuh";
// }
// console.log(myName);
