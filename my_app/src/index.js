import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";


import App from "./App";

import "./index.css";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);
