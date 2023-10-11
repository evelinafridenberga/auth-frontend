import React, { useState } from "react";
import { loginUser } from "./api";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginUser(email, password);
      console.log(response); // Handle successful login
      setLoginError("");
      props.onLoginSuccess();
    } catch (error) {
      setLoginError(error.message); // Set the login error message in state
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
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
        <button type="submit" className="button-container" disabled={isLoading}>
          {isLoading ? <div className="loader" /> : "Log in"}
        </button>

        {loginError && <div className="error-message">{loginError}</div>}
      </form>
      {props.onFormSwitch && (
        <button onClick={() => props.onFormSwitch("register")}>
          Register here
        </button>
      )}
    </div>
  );
};
