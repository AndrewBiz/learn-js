// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(3, 4));

// function getNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getNameFromEmail("vassa.pupkind@gmail.com"));

const result = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(result("vassa.pupkind@gmail.com"));
