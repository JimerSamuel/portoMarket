import React from "react";
import "@styles/SendEmail.scss";
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">¡E-mail ha sido enviado!</h1>
        <p className="subtitle">
          Consulte su bandeja de entrada para obtener instrucciones sobre cómo
          restablecer la contraseña.
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Iniciar sesion</button>
        <p className="resend">
          <span>¿No recibiste el correo electrónico?</span>
          <a href="/">Reenviar</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
