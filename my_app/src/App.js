import React from 'react'

import './App.css';


// component

import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import Profile from "./Components/Profile"



function App() {
  return (
     <div className="app-wrapper" >
       <Header/>
       <NavBar/>
       <Profile/>
    </div>
  );
}

export default App;
