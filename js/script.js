class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  addToppings(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const basePrice = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce(
      (accumalator, currentValue) => accumalator + currentValue.price,
      0
    );
    return basePrice + toppingsPrice;
  }

  calculateCalories() {
    const baseCalories = this.size.calories + this.stuffing.calories;
    const toppingCalories = this.toppings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.calories,
      0
    );
    return baseCalories + toppingCalories;
  }
}

const hamburger = new Hamburger(
  Hamburger.SIZE_LARGE,
  Hamburger.STUFFING_CHEESE
);
console.log(`Price hamburger is: ${hamburger.calculatePrice()}`);
console.log(`Calories hamburger is: ${hamburger.calculateCalories()}`);
//add mayo
hamburger.addToppings(Hamburger.TOPPING_MAYO);

console.log(`Price hamburger is: ${hamburger.calculatePrice()}`);
console.log(`Calories hamburger is: ${hamburger.calculateCalories()}`);
//and add more spice
hamburger.addToppings(Hamburger.TOPPING_SPICE);

console.log(`Price hamburger is: ${hamburger.calculatePrice()}`);
console.log(`Calories hamburger is: ${hamburger.calculateCalories()}`);
