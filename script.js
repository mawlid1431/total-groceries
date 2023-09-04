// Good Luck 💪🏾   



function getTotalPrice(groceries) {
  let total = 0;

  for (const item of groceries) {
    total += item.quantity * item.price;
  }

  return total;
}

// Example usages:
const groceries1 = [
  { product: "Milk", quantity: 1, price: 1.50 }
];
console.log(getTotalPrice(groceries1)); // Output: 1.5

const groceries2 = [
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
];
console.log(getTotalPrice(groceries2)); // Output: 4

const groceries3 = [
  { product: "Milk", quantity: 3, price: 1.50 }
];
console.log(getTotalPrice(groceries3)); // Output: 4.5

