const myObject = {
  name: "Андрюха",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

const myArray = ["eat", "sleep", "fuck"];

sessionStorage.setItem("anbSessionData1", JSON.stringify(myArray));
const mySessionData1 = JSON.parse(sessionStorage.getItem("anbSessionData1"));
console.log(mySessionData1);
console.log(typeof mySessionData1);

sessionStorage.setItem("anbSessionData2", JSON.stringify(myObject));
const mySessionData2 = JSON.parse(sessionStorage.getItem("anbSessionData2"));
console.log(mySessionData2);
console.log(typeof mySessionData2);

localStorage.setItem("anbLocalData1", JSON.stringify(myArray));
const myLocalData1 = JSON.parse(localStorage.getItem("anbLocalData1"));
console.log(myLocalData1);
console.log(typeof myLocalData1);

localStorage.setItem("anbLocalData2", JSON.stringify(myObject));
const myLocalData2 = JSON.parse(localStorage.getItem("anbLocalData2"));
console.log(myLocalData2);
console.log(typeof myLocalData2);
