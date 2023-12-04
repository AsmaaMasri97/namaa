import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
// i18n
import "./locales/i18n";

// scroll bar
import "simplebar/dist/simplebar.css";

// lightbox
import "react-image-lightbox/style.css";

// editor
import "react-quill/dist/quill.snow.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
// toast
import 'react-toastify/dist/ReactToastify.css';
// ----------------------------------------------------------------------

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// redux
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// components
import { SettingsProvider } from "./components/settings";
// toast
import { ToastContainer } from "react-toastify";

// ----------------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SettingsProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </SettingsProvider>
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
