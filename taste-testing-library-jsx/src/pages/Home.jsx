import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="d-flex flex-direction-column justify-content-center align-items-center h-100">
      <div>
        <h3>Home</h3>
      </div>
      <div>
        <input type="text" placeholder="user input" />
      </div>
    </div>
  );
};

export default Home;
