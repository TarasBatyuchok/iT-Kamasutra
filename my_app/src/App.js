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

const App = (props)=> {

  return (
    <div className="app-wrapper">
      
      <Header />
      <NavBar state={props.state.navbar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
