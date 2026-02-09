import React from 'react';
import { menu_list } from '../../assets/frontend_assets/assets';
import './menu.css';

export default function Menu({ category, setCategory }) {
  return (
    <section id="explore-menu" className="menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a variety of delicious dishes. Fresh ingredients, bold flavors,
        and something for everyone.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, idx) => {
          const active = category === item.menu_name;

          return (
            <div
              key={idx}
              className={`menu-list-item ${active ? 'active' : ''}`}
              onClick={() =>
                setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)
              }
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
