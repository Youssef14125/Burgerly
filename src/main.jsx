import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1c1922",
            color: "#f5f3f0",
            border: "1px solid #322c3a",
          },
        }}
      />
    </Provider>
  </React.StrictMode>,
);
