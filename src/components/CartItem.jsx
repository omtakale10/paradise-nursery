import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increment, decrement } from "../redux/cartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>

          <button
            className="delete-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      ))}

      {/* ✅ REQUIRED FORMAT */}
      <h2>Total Cart Amount: ₹{calculateTotalAmount()}</h2>

      {/* ✅ REQUIRED BUTTON */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      {/* ✅ REQUIRED BUTTON */}
      <button>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
