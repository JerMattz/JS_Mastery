const inventory = [];

function addProduct(product) {
  inventory.push(product);
}

function updateStock(productId, newQuantity) {
  const product = inventory.find((item) => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
  } else {
    console.log("Product not found.");
  }
}

function totalInventoryValue() {
  return inventory.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

function highestStockProduct() {
  if (inventory.length === 0) return null;
  return inventory.reduce((maxProduct, currentProduct) =>
    currentProduct.quantity > maxProduct.quantity ? currentProduct : maxProduct
  );
  //   return inventory.filter();
}

addProduct({ id: 1, name: "Apple", price: 10, quantity: 50 });
addProduct({ id: 2, name: "Banana", price: 5, quantity: 100 });

updateStock(1, 20);

console.log(totalInventoryValue());
console.log(highestStockProduct());

console.log(inventory);
