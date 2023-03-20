import { createBrowserRouter } from "react-router-dom";

import { Home } from "./components/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
