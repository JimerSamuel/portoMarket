import React, { useContext } from "react";
import Menu from "@components/Menu";
import MyOrder from "../containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import "@styles/Header.scss";

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">Todos</a>
            </li>
            <li>
              <a href="/">Ropa</a>
            </li>
            <li>
              <a href="/">Electrodomesticos</a>
            </li>
            <li>
              <a href="/">Muebles</a>
            </li>
            <li>
              <a href="/">Juguetes</a>
            </li>
            <li>
              <a href="/">Otros</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li
              className="more-clickable-area navbar-email pointer"
              onClick={() => toggleMenu()}
            >
              cetiportoviejo@example.com
            </li>
            <li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
              <img
                className="more-clickable-area pointer"
                src={shoppingCart}
                alt="shopping cart"
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
