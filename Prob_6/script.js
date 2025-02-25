const orderList = [];

function addOrder(orders) {
  orderList.push(orders);
}

function calculateTotal(orderId) {
  const order = orderList.find((order) => order.id === orderId);
  return order.items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

function findMostExpensiveOrder() {
  return orderList.reduce((maxOrder, currentOrder) =>
    calculateTotal(currentOrder.id) > calculateTotal(maxOrder.id)
      ? currentOrder
      : maxOrder
  );
}

function getItemsAbovePrice(price) {
  return orderList
    .flatMap((order) => order.items)
    .filter((item) => item.price > price);
}

addOrder({
  id: 1,
  items: [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 50, quantity: 2 },
  ],
});
addOrder({
  id: 2,
  items: [
    { name: "Keyboard", price: 100, quantity: 1 },
    { name: "Monitor", price: 300, quantity: 1 },
  ],
});

console.log(calculateTotal(1)); // Output: 1100
console.log(findMostExpensiveOrder()); // Output: Order 1
console.log(getItemsAbovePrice(100)); // Output: [{ name: 'Laptop', ...}, { name: 'Monitor', ...}]

console.log(orderList);
