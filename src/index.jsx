import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import rootReducer from "./reducers/index.js";
import App from "./App.jsx";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <App />
      </Router>
    </Provider>
);
