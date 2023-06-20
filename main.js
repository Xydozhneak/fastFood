class Hamburger {
  constructor(size, contain) {
    this.size = size;
    this.contain = contain;
    this.addOns = [];
  }

  addAddOn(addOn) {
    this.addOns.push(addOn);
  }

  getPrice() {
    const totalPrice = this.addOns.reduce((acc, addOn) => acc + addOn.price, this.size.price + this.contain.price);
    return totalPrice;
  }

  getCalories() {
    const totalCalories = this.addOns.reduce((acc, addOn) => acc + addOn.calories, this.size.calories + this.contain.calories);
    return totalCalories;
  }
}

const SMALL = { price: 50, calories: 20 };
const LARGE = { price: 100, calories: 40 };

const CHEESE = { price: 10, calories: 20 };
const SALAD = { price: 20, calories: 5 };
const POTATOES = { price: 15, calories: 10 };

const SEASONING = { price: 15, calories: 0 };
const MAYONNAISE = { price: 20, calories: 5 };

const hamburger = new Hamburger(SMALL, CHEESE);
hamburger.addAddOn(SEASONING);
hamburger.addAddOn(MAYONNAISE);

const price = hamburger.getPrice();
const calories = hamburger.getCalories();

console.log(`price: ${price} `);
console.log(`calories: ${calories} `);
