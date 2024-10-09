// import playGuitar from "./guitars.js";
// import { shredding, plucking } from "./guitars.js";

// console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";
const me = new User("ee", "Joppa");
console.log(me);
console.log(me.greeting());
