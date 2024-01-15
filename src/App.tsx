import React from "react";
import { Header, WrapperComponent } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import { RouterLinks } from "./constants";
import { BallPage, DragonPage, HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header variant="transparent" />
        <Outlet />
      </>
    ),
    children: [
      {
        path: RouterLinks.Home,
        element: <HomePage />,
      },
      {
        path: RouterLinks.Dragon,
        element: <DragonPage />,
      },
      {
        path: RouterLinks.Ball,
        element: <BallPage />,
      },
    ],
  },
]);

function App() {
  return (
    <WrapperComponent>
      <RouterProvider router={router} />
    </WrapperComponent>
  );
}

export default App;
