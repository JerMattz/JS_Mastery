function addProduct(cart, prodName, prodPrice, prodQty) {
  const newProd = {
    id: cart.length > 0 ? cart[cart.length - 1].id + 1 : 1,
    name: prodName,
    price: prodPrice,
    quantity: prodQty,
  };

  cart.push(newProd);
}

function updateQuantity(cart, prodId, prodQty) {
  cart.forEach((product) => {
    if (product.id === prodId) {
      product.quantity = prodQty;
    }
  });
}

function removeProduct(cart, prodId) {
  const index = cart.findIndex((product) => product.id === prodId);
  if (index !== -1) {
    cart.splice(index, 1); // Remove product from array
  }
}

function calculateTotal(cart) {
  // Reduces the array to single element
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

let cart = [
  { id: 1, name: "Apple", price: 30, quantity: 2 },
  { id: 2, name: "Banana", price: 10, quantity: 5 },
];

addProduct(cart, "Orange", 20, 3);
updateQuantity(cart, 1, 5);
removeProduct(cart, 2);
const totalPrice = calculateTotal(cart);

console.log(cart);
console.log("Total Price:", totalPrice);
