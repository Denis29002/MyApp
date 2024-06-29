import React, { useState } from "react";
import CatalogItem from "./CatalogItem";
import style from "./catalogitem.module.css";
import Cart from "../Cart/Cart";
import { data } from "./data";

function CatalogItems() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const increment = (id) => {
    setCart(
      cart.map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el))
    );
  };
  const decrement = (id, count) => {
    if (count === 1) {
      setCart(cart.filter((el) => el.id !== id));
    } else
      setCart(
        cart.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
      );
  };
  return (
    <div className={style.container}>
      <h1>ONE PRICE COFFEE</h1>
      <div className={style.container_items}>
        {data.map((el) => (
          <CatalogItem
            prices={el.prices}
            name={el.name}
            cart={cart}
            addToCart={addToCart}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>{" "}
      <Cart cart={cart} increment={increment} decrement={decrement} />
    </div>
  );
}

export default CatalogItems;
