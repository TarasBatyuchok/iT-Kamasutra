import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// component

import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import SettingsPage from "./Components/SettingsPage/SettingPage";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div class="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<SettingsPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
