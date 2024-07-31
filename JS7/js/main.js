let soup = "Chicken noodle soup";
let customerIsBanned = true;
let reply;

if (customerIsBanned) {
  reply = "sorry bro, you're BANNED!";
} else {
  reply = `Your order of ${soup}, bro!`;
}

console.log(reply);
