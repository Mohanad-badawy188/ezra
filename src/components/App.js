import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route ,Navigate} from "react-router-dom";
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


const App = ()=> {
  const user = JSON.parse(localStorage.getItem('user'))
console.log(user)

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
      element: <div>
              <Header />
       
        {user ? (<Navigate to="/" replace={true} /> ):<Login /> }
        <Footer />
        </div>
    },
    {
      path: "/signup",
      element: (
        <div>
                <Header />
               {user ? (<Navigate to="/" replace={true} /> ):<Signup />}
               <Footer />
    
        </div>
      ),
    },
    {
      path: "/user/:id",
      element: (
        <div>
                <Header />
               {user ? (<UserPage /> ):<Signup />}
               <Footer />
    
        </div>
      ),
    },
    {
      path: "/productPage/:id",
      element: (
        <div>
                <Header />
          {user ? (      <ProductPage />   ):<Login /> }
          <Footer />
        </div>
      ),
    },
    {
      path: "/Cart",
      element: (
        <div>
                <Header />
           {user ? (        <Cart />  ):<Login /> }
       <Footer />
        </div>
      ),
    },
   
    
  ]);
    return (

      <div>
  
        <RouterProvider router={router} />

      </div>
    );
  
}

export default App;
