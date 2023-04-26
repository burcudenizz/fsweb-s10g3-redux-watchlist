import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./reducers";
import { createLogger } from "redux-logger";
const root = ReactDOM.createRoot(document.getElementById("root"));

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const depo = createStore(reducer, applyMiddleware(logger));
root.render(
  <BrowserRouter>
    <Provider store={depo}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
- turuncu kutu: 
-- kütüphaneleri eklemek
-- Provider, createStore, reducer, başlangıç değerleri

- store içinden verileri okumak - useSelector
- store içindeki verileri değiştirmek - useDispatch
*/
