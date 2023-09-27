import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootWrapper from "./pages/RootWrapper";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

import "./App.css";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootWrapper />,
      children: [
        { index: true, element: <Home /> },
        { path: "products/:productId", element: <Product /> },
        { path: "cart", element: <Cart /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
