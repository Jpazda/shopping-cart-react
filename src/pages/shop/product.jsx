import React, { useContext } from "react";
import "../shop/shop.css";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const itemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="info">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to Cart {itemAmount > 0 && <>({itemAmount})</>}
        </button>
      </div>
    </div>
  );
};
