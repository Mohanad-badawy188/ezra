import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./home";
import Store from "./store";
import Login from "./login";
import Signup from "./Signup";
import Contact from "./Contact";
import About from "./about";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import UserPage from "./userPage";
import "./App.css";

export default function Router() {
  const user = JSON.parse(localStorage.getItem("user"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: (
        <div>{user ? <Navigate to="/" replace={true} /> : <Login />}</div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>{user ? <Navigate to="/" replace={true} /> : <Signup />}</div>
      ),
    },
    {
      path: "/user/:id",
      element: <div>{user ? <UserPage /> : <Signup />}</div>,
    },
    {
      path: "/productPage/:id",
      element: <div>{user ? <ProductPage /> : <Login />}</div>,
    },
    {
      path: "/Cart",
      element: <div>{user ? <Cart /> : <Login />}</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
