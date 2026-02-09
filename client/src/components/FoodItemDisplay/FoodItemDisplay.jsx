// FoodItemDisplay.jsx
import React, { useContext } from 'react';
import './foodItemDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodItemDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <section id="food-display" className="food-display">
      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">
        {food_list?.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={item._id || index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                rating={item?.rating}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default FoodItemDisplay;
