
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClientID } from "./DefaultValues";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <GoogleOAuthProvider clientId={googleClientID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
