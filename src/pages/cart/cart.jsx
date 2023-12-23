import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../shop/products";
import { CartItem } from "./cartItem";
import { ShopContext } from "../../context/shopContext";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

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
      <div className="checkout">
        <p className="subtotal">subtotal: ${totalAmount}</p>
        <div className="checkout-buttons">
          <button className="checkout-button" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};
