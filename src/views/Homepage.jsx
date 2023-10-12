import React from "react";

function Home({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page content.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
