import React from "react";
import style from "./nav.module.css";
import { Cart } from "./Cart";
import { Main } from "./Main";
import { Delivery } from "./Delivery";
import { Route, Routes, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={style.container}>
      <header className={style.container_menu}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/delivery">Доставка</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Nav;
