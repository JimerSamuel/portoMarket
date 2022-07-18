import React from "react";
import "@styles/PasswordRecovery.scss";
import logo from "@logos/logo_yard_sale.svg";

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Recuperar contraseña</h1>
        <p className="subtitle">
          Informa la dirección de correo electrónico utilizada para crear tu
          cuenta
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Correo electrónico
          </label>
          <input type="text" id="email" className="input input-email" />
          <input
            type="submit"
            value="Confirmar"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
