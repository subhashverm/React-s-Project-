import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopEase</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-icons">
        <Link to="/cart" className="cart-icon" title="Cart">
          🛒
        </Link>
        <Link to="/profile" className="profile-icon" title="Profile">
          <span role="img" aria-label="profile">👤</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;