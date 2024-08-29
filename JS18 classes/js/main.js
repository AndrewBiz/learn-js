class Pizza {
  #size = "trulala";
  constructor(pizzaSize) {
    this.size = pizzaSize;
  }
  set size(pizzaSize) {
    this.#size = pizzaSize;
  }
  get size() {
    this.#size;
  }
}

class Margo extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
  }
  ads() {
    console.log(`Pizza Margo ${this.size} size !!!`);
  }
}

myP = new Margo("small");
myP.ads();

// приватные свойства = унылое говно
