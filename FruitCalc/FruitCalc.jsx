import React from "react";

const arr = [
  { name: "apple", price: 200, count: 6, category: "fruit" },
  { name: "banana", price: 100, count: 2, category: "fruit" },
  { name: "tomato", price: 300, count: 5, category: "vegetable" },
];

const discounts = { fruit: 20, vegetable: 30 };
function FruitCalc() {
  const cost = arr
    .map(
      (el) => (el.price - (el.price / 100) * discounts[el.category]) * el.count
    )
    .reduce((cur, prev) => cur + prev, 0);
  console.log(cost);
  return <div></div>;
}

export default FruitCalc;
