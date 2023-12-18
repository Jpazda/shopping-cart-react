import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shopContext";
import { useEffect } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <img src={productImage} />
      <div className="cart-info">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button
            className="plus-minus-buttons"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="item-amount-value"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="plus-minus-buttons" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
