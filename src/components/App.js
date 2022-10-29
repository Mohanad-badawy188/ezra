import React, { Component, useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
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
import { useSelector } from "react-redux";
import { UserContext } from "./userContext";
import axios from "axios";
import { createContext  } from "react";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [order, setOrder] = useState([]);
  console.log(user)
if (user){
  const fetchUserProduct = async () => {
    const TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
    const userId = JSON.parse(localStorage.getItem("user")).foundUser._id;
    const res = await axios({
      method: "get",
      url: `http://localhost:5000/api/cart/find/${userId}`,
      headers: { token: `Bearer ${TOKEN}` },
    });
    setOrder(res.data);
  };
  useEffect(() => {
    fetchUserProduct();
  }, [setOrder]);
}



  const ProviderValue = useMemo(() => ({ order, setOrder }), [order, setOrder]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      ),
    },
    {
      path: "/store",
      element: (
        <div>
          <Header />
          <Store />
          <Footer />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Header />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Header />
          <Contact />
          <Footer />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Header />

          {user ? <Navigate to="/" replace={true} /> : <Login />}
          <Footer />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>
          <Header />
          {user ? <Navigate to="/" replace={true} /> : <Signup />}
          <Footer />
        </div>
      ),
    },
    {
      path: "/user/:id",
      element: (
        <div>
          <Header />
          {user ? <UserPage /> : <Signup />}
          <Footer />
        </div>
      ),
    },
    {
      path: "/productPage/:id",
      element: (
        <div>
          <Header />
          {user ? <ProductPage /> : <Login />}
          <Footer />
        </div>
      ),
    },
    {
      path: "/Cart",
      element: (
        <div>
          <Header />
          {user ? <Cart /> : <Login />}
          <Footer />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <UserContext.Provider value={ProviderValue}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
