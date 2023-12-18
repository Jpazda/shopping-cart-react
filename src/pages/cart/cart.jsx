import React, { useContext, useEffect } from "react";
import { PRODUCTS } from "../shop/products";
import { CartItem } from "./cartItem";
import { ShopContext } from "../../context/shopContext";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
    </div>
  );
};
