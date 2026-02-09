import React from "react";
import "./placeOrder.css";

export default function PlaceOrder() {
  return (
    <section className="place-order-section">
      <div className="place-order-wrapper">
        <h1 className="place-order-title">Complete Your Order</h1>

        <div className="place-order-grid">
          {/* LEFT — Delivery Form */}
          <div className="delivery-card">
            <h2>Delivery Details</h2>
            <form className="delivery-form">
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="Your Name" />
              </div>

              <div>
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="91XXXXXXXX" />
              </div>

              <div>
                <label>Delivery Address</label>
                <textarea rows="4" placeholder="Street, City, Pincode"></textarea>
              </div>
            </form>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-list">
              <div className="summary-row">
                <p>Subtotal</p>
                <p>$34.90</p>
              </div>

              <div className="summary-row">
                <p>Delivery Fee</p>
                <p>$2.00</p>
              </div>

              <div className="summary-row total">
                <p>Total</p>
                <p>$36.90</p>
              </div>
            </div>

            {/* Payment */}
            <div className="payment-section">
              <h3 className="payment-title">Payment Method</h3>
              <div className="payment-options">
                <label>
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery</span>
                </label>

                <label>
                  <input type="radio" name="payment" />
                  <span>UPI / Wallet</span>
                </label>

                <label>
                  <input type="radio" name="payment" />
                  <span>Credit / Debit Card</span>
                </label>
              </div>
            </div>

            <button className="confirm-btn">Confirm Order</button>
          </div>
        </div>
      </div>
    </section>
  );
}
