import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="shop">
          Shop
        </Link>
        <Link to="/cart">
          <ShoppingCart size={45} style={{ color: "black" }} />
        </Link>
        <span className="items-number"></span>
      </div>
    </div>
  );
};
