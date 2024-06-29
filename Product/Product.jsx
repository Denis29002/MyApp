import React, { useState } from "react";
import style from "../Product/product.module.css";

const arr = [
  { id: 1, price: 1000, count: 2 },
  { id: 2, price: 170, count: 12 },
  { id: 3, price: 1250, count: 5 },
  { id: 4, price: 100, count: 2 },
];

function Product() {
  const [counts, setCounts] = useState(arr);

  const increment = (id) => {
    setCounts(
      counts.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const totals = counts.reduce((acc, cur) => acc + cur.count * cur.price, 0);

  console.log(counts);
  return (
    <div className={style.product}>
      <div className={style.products_items}>
        {counts.map((el) => (
          <div key={el.id} className={style.product_item}>
            <p>{el.price} ₽ </p>
            <p>{el.count}</p>
            <button onClick={() => increment(el.id)}>Увеличить на 1</button>
            <p>{(el.sum = el.price * el.count)} ₽</p>
          </div>
        ))}
      </div>
      <div className={style.product_result}>ИТОГО: {totals} ₽ </div>
    </div>
  );
}

export default Product;
