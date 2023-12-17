import { PersistGate } from "redux-persist/integration/react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "@routes/Router";
import store, { persistor } from "@store/Store";

import GlobalStyle from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
