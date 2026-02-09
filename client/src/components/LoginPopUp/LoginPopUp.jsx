// LoginPopUp.jsx
import React, { useState } from "react";
import { fassets } from "../../assets/frontend_assets/assets";
import "./loginPopUp.css";

export default function LoginPopUp({ setShowLogin }) {
  const [mode, setMode] = useState("Sign Up"); // 'Sign Up' | 'Login'

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{mode}</h2>
          <button onClick={() => setShowLogin(false)}>
            <img src={fassets.cross_icon} alt="close" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="login-popup-input">
          {mode !== "Login" && (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="you@example.com" required />
          <input type="password" placeholder="password" required />

          <button type="submit">
            {mode === "Sign Up" ? "Create Account" : "Log In"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the{" "}
              <span>terms of use</span> & privacy policy.
            </p>
          </div>

          <p>
            {mode === "Login" ? (
              <>
                Create a new account?{" "}
                <span onClick={() => setMode("Sign Up")}>Click here</span>
              </>
            ) : (
              <>
                Already have an Account?{" "}
                <span onClick={() => setMode("Login")}>Login here</span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
