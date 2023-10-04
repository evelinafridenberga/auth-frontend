import React, { useState } from "react";
import { loginUser } from "./api"; // Import the login function

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log(response); // Handle successful login
    } catch (error) {
      setError(error.message); // Set the error message in state
    }
  };

  return (
    <div className="auth-container">
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          placeholder="***"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
      {props.onFormSwitch && (
        <button onClick={() => props.onFormSwitch("register")}>
          Register here
        </button>
      )}
    </div>
  );
};
