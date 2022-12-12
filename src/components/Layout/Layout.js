import React from "react";

import Header from "../Header/Header.js";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.js";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
    </div>
  );
};

export default Layout;
