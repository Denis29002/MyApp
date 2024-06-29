import React, { useState } from "react";
import style from "./catalogitem.module.css";
import { v4 as uuidv4 } from "uuid";

const extras = [
  { name: "без сиропа", price: 0 },
  { name: "карамельный", price: 20 },
  { name: "ореховый", price: 35 },
];

function CatalogItem({ prices, name, cart, addToCart, increment, decrement }) {
  const [price, setPrice] = useState(prices[0]);
  const [syrop, setSyrop] = useState(extras[0]);
  const [sugar, setSugar] = useState(false);

  const changeSyrop = (el) => {
    setSyrop(el);
  };

  const changePrice = (el) => {
    setPrice(el);
  };

  const changeSugar = () => {
    setSugar(!sugar);
  };

  const sameItem = cart.find(
    (el) =>
      el.name === name &&
      el.sugar === sugar &&
      el.syrop === syrop &&
      el.size === price.volue
  );

  const addNewItem = () => {
    const newItem = {
      id: uuidv4(),
      name,
      size: price.volue,
      syrop,
      sugar,
      price: newCost,
      count: 1,
    };
    addToCart(newItem);
  };

  const newCost = price.count + syrop.price;

  return (
    <div className={style.catalogItem}>
      <div className={style.item}>
        <h2>{name}</h2>
        <p>Цена за кофе: {newCost} ₽</p>
        <div className={style.item_syrop}>
          {extras.map((el) => (
            <button
              className={syrop === el ? style.active_item : ""}
              onClick={() => changeSyrop(el)}
            >
              {el.name}
            </button>
          ))}
        </div>

        <div className={style.container_buttons_vol}>
          {prices.map((el) => (
            <button
              className={price.count === el.count ? style.active : ""}
              onClick={() => changePrice(el)}
            >
              {el.volue}
            </button>
          ))}
        </div>
        <div className={style.container_checkbox}>
          <input type="checkbox" onChange={changeSugar} checked={sugar} />
          <label>Без сахара</label>
        </div>
        <div className={style.container_add_button}>
          {!sameItem ? (
            <button onClick={addNewItem}>Добавить</button>
          ) : (
            <div className={style.container_counter}>
              <button onClick={() => increment(sameItem.id)}>+</button>
              <p>{sameItem.count}</p>
              <button onClick={() => decrement(sameItem.id, sameItem.count)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
