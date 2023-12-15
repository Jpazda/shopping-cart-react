import React from "react";
import "../shop/shop.css";

export const Product = (props) => {
  const { Id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />
      <div className="info">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};
