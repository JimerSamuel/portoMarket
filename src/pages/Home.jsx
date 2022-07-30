import React from "react";
import ProductList from "@containers/ProductList";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import MyAccount from "./MyAccount";
import NewPassword from "./NewPassword";
import PasswordRecovery from "./PasswordRecovery";
import SendEmail from "./SendEmail";

const Home = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default Home;
