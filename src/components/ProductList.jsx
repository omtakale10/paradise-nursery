import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aloe_vera_flower.JPG",
  },
  {
    id: 2,
    name: "Tulsi",
    price: 8,
    category: "Medicinal",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tulsi_plant.jpg",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sansevieria_trifasciata.jpg",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 18,
    category: "Indoor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Spathiphyllum_cochlearispathum_RTBG.jpg",
  },
  {
    id: 5,
    name: "Rose",
    price: 12,
    category: "Flowering",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Rose_pink_1.jpg",
  },
  {
    id: 6,
    name: "Sunflower",
    price: 14,
    category: "Flowering",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // ✅ REQUIRED HANDLER FUNCTION
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div>
      <h1>Product List</h1>

      {["Medicinal", "Indoor", "Flowering"].map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id}>
                  
                  {/* ✅ CLEAR THUMBNAIL IMAGE */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                    height="150"
                  />

                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id) ? "Added" : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
