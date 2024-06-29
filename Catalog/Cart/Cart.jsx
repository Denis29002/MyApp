import React from "react";
import style from "./cart.module.css";

function Cart({ cart, increment, decrement }) {
  return (
    <div className={style.cart}>
      <h1>КОРЗИНА</h1>
      {cart.map((el) => (
        <div className={style.cart_item}>
          <h2>{el.name}</h2>
          <p>{el.syrop.name}</p>
          <p>{el.sugar}</p>
          <p>{el.size}</p>
          <button onClick={() => increment(el.id)}> +</button>
          <p>{el.count} шт.</p>
          <button onClick={() => decrement(el.id, el.count)}> -</button>
          <p>{el.price} ₽</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
