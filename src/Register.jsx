import React, { useState } from "react";
import { registerUser } from "./api";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await registerUser(email, password);
      console.log(response);
      setRegistrationError("");
      props.onRegistrationSuccess();
    } catch (error) {
      setRegistrationError(error.message); // Set the registration error message in state
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
          {isLoading ? <div className="loader" /> : "Sign up"}
        </button>

        {registrationError && (
          <div className="error-message">{registrationError}</div>
        )}
      </form>
      <button onClick={() => props.onFormSwitch("login")}>Login here</button>
    </div>
  );
};
