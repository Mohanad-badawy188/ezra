import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from './header' 
import Footer  from './footer'
import Home from './home';
import Store from './store';
import Login from './login';
import Signup from './Signup';
import Contact from './Contact';
import About from './about';
import ProductPage from './ProductPage';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home /></div>,
  },
  {
    path: "/store",
    element: <div><Store /></div>,
  },
  {
    path: "/about",
    element: <div><About /></div>,
  },
  {
    path: "/contact",
    element: <div><Contact /></div>,
  },
  {
    path: "/login",
    element: <div><Login /></div>,
  },
  {
    path: "/signup",
    element: <div><Signup /></div>,
  },
  {
    path: "/productPage",
    element: <div><ProductPage /></div>,
  }
]);

class App extends Component {
  render() {
    return( <div>
<Header />
<RouterProvider router={router} />
  <Footer />
    </div>
  ) }
}

export default App;
