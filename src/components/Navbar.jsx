import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2>🌿 Paradise Nursery</h2>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
