import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import './cart.css';

export default function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const delivery = subtotal === 0 ? 0 : 2;
  const total = subtotal === 0 ? 0 : subtotal + delivery;

  return (
    <div className="cart">
      {/* Cart Items */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {food_list.map((item) =>
          cartItems[item._id] > 0 ? (
            <div key={item._id} className="cart-items-item">
              <div className="cart-items-grid">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItems[item._id]}</p>
                <p className="cart-item-total">
                  ${(item.price * cartItems[item._id]).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  ✖
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Bottom Section */}
      <div className="cart-bottom">
        {/* Total */}
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${delivery.toFixed(2)}</p>
          </div>

          <div className="cart-total-details" style={{ fontWeight: '700', color: '#ff4b2b', fontSize: '1.1rem' }}>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code */}
        <div className="cart-promocode">
          <p>If you have a promocode, enter it below:</p>

          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
