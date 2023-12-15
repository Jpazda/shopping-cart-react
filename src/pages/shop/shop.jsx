import React from "react";
import { PRODUCTS } from "./products";
import { Product } from "./product";

export const Shop = () => {
  const items = PRODUCTS;
  console.log(items);
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Shop Modern</h1>
      </div>
      <div className="products">
        {items.map((item) => {
          return <Product key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
