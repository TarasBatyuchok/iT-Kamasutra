import React from "react";

import "./App.css";

// component

import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
