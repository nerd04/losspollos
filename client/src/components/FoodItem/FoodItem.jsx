// FoodItem.jsx
import React, { useContext } from 'react';
import './foodItem.css';
import { fassets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/storeContext';

function FoodItem({ id, name, price, description, image, rating = 4 }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="food-item">
      {/* Image */}
      <div className="food-item-image-container">
        <img
          src={image}
          alt={name}
          className="food-item-image"
        />

        {/* Add / Counter */}
        {!cartItems[id] ? (
          <img
            src={fassets.add_icon_white}
            alt=""
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={fassets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={fassets.add_icon_green}
              alt="add"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <div className="food-item-rating">{renderStars()}</div>
        </div>

        <p className="food-item-desc">{description}</p>

        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
