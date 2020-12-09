import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

// TimeAgo initialization imports
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          },
          session: { user: {currentUserId: window.currentUser.id} }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // TimeAgo initialization

    TimeAgo.addDefaultLocale(en);
      
    ReactDOM.render(<Root store={store}/>, root);
})

