import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home.jsx";
import InventoryPage from "./InventoryPage.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart.jsx";
import FilterProducts from "./FilterProducts.jsx";
import ViewProduct from "./View.jsx";

import { Provider } from "react-redux";
import {store} from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/InventoryPage",
    element: <InventoryPage />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/category/:categoryName",
    element: <FilterProducts />,
  },
  {
    path: "/product/:title",
    element: <ViewProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>
);
