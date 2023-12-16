import React from "react";
import "./cart.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cart-item">
      <img src={productImage} />
      <div className="cart-info">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};
