import React from "react";
import "@styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">Mi cuenta</h1>
        <form action="/" className="form">
          <div>
            <label for="name" className="label">
              Nombre
            </label>
            <p className="value">Jimer Samuel Espinoza</p>
            <label for="email" className="label">
              Correo Electronico
            </label>
            <p className="value">ejimersamo@gmail.com</p>
            <label for="password" className="label">
              contraseña
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Editar"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
