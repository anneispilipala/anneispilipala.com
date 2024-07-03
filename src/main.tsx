import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import routes from "./router";

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);