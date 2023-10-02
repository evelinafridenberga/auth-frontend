import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";
import Home from "./Homepage";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handleRegistrationSuccess = () => {
    setCurrentPage("login");
  };

  const handleLoginSuccess = () => {
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setCurrentPage("login");
  };

  return (
    <div className="App">
      {currentPage === "login" && (
        <Login
          onFormSwitch={() => setCurrentPage("register")}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {currentPage === "register" && (
        <Register
          onFormSwitch={() => setCurrentPage("login")}
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      )}
      {currentPage === "home" && <Home onLogout={handleLogout} />} {}
    </div>
  );
}

export default App;
