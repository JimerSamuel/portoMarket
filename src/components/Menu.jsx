import React from "react";
import "@styles/Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/" className="title">
            Mi orden
          </a>
        </li>
        <li>
          <a href="/">Mi cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar sesion</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
