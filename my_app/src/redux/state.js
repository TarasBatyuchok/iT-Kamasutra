import { rerenderEntireTree } from "../render"

let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        message: "Hello friend",
        likesCount: "45",
      },
      {
        id: 2,
        message: "Hello i'm props",
        likesCount: "5",
      },
    ],
    newPostText: "samurai"
  },
  dialogsPage: {
    messageData: [
      {
        id: 1,
        message: "hi",
      },
      {
        id: 2,
        message: "Hello",
      },
      {
        id: 3,
        message: "wtf",
      },
      {
        id: 4,
        message: "Props",
      },
      {
        id: 5,
        message: "hlop hlop hlop",
      },
    ],

    dialogData: [
      {
        id: 1,
        name: "Dimych",
      },
      {
        id: 2,
        name: "Sveta",
      },
      {
        id: 3,
        name: "Dimych",
      },
      {
        id: 4,
        name: "Sasha",
      },
      {
        id: 5,
        name: "Valera",
      },
    ],
  },
  navbar: {
    linkData: [
      {
        id: 1,
        title: "Profile",
        route: "/profile",
      },
      {
        id: 2,
        title: "Dialogs",
        route: "/dialogs",
      },
      {
        id: 3,
        title: "News",
        route: "/news",
      },
      {
        id: 4,
        title: "Music",
        route: "/music",
      },
      {
        id: 5,
        title: "Settings",
        route: "/settings",
      },
    ],
    friendData: [
      {
        id: 1,
        name: "Max",
        src: "#",
      },
      {
        id: 2,
        name: "IGor",
        src: "#",
      },
      {
        id: 3,
        name: "Taras",
        src: "#",
      },
      {
        id: 4,
        name: "Yaruna",
        src: "#",
      },
      {
        id: 5,
        name: "Volodya",
        src: "#",
      },
      {
        id: 6,
        name: "Volodya",
        src: "#",
      },
    ],
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.postData.push(newPost);
  rerenderEntireTree(state)
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
