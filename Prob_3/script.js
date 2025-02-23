// Given an array of item prices, calculate the total bill.
// Apply a 10% discount if the total exceeds 100.

function totalBill(prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  const discount = total * 0.1;

  const discountPrice = total > 100 ? total - discount : total;

  return { total, discountPrice, discount };
}

let {
  total: orginalPrice,
  discountPrice,
  discount,
} = totalBill([20, 30, 50, 10]);

console.log(
  `MRP: ${orginalPrice}, After discount of ${discount} : Total = ${discountPrice} `
);
