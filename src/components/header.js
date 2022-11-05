import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useCart, UserInfo } from "./userContext";

function Header() {
  const user = UserInfo();

  const { order, setOrder } = useCart();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  };
  return (
    <header>
      <nav className="navbar   navbar-expand-lg ">
        <div className="container ">
          <div>
            <p className="navbar-brand text-white">
              {" "}
              <img
                className="navbar-brand circle"
                src={require("../pics/icon.ico")}
                height="55"
                alt=""
              />{" "}
              EZRAA
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="  collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className=" navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="ps-3 pe-3 nav-item  removeUnderline nav-link ">
                <a className="" href="/">
                  HOME
                </a>
              </li>
              <li className="ps-3 pe-3  removeUnderline nav-link">
                <a href="/store">STORE</a>
              </li>
              <li className="ps-3 pe-3  removeUnderline nav-link">
                <a href="/about">ABOUT US</a>
              </li>
              <li className="ps-3 pe-3  removeUnderline nav-link ">
                <a href="/contact">CONTACT US</a>
              </li>
              {user ? (
                <li className="ps-3 pe-3 removeUnderline  nav-link text-white">
                  <a href={"/user/" + user.foundUser._id}>
                    {" "}
                    {user.foundUser.name.toUpperCase()}
                  </a>
                </li>
              ) : (
                <li className="ps-3 pe-3  removeUnderline nav-link">
                  <a href="/login">LOGIN</a>
                </li>
              )}
              {user ? (
                <li className="ps-3 pe-3 removeUnderline nav-link">
                  <a href="/login" onClick={handleClick}>
                    LOGOUT
                  </a>
                </li>
              ) : (
                <li className="ps-3 pe-3 removeUnderline nav-link">
                  <a href="/signup">SIGNUP</a>
                </li>
              )}

              {user && (
                <Link to={"/cart"}>
                  <li className="ps-3 pe-3  removeUnderline nav-link">
                    <Badge badgeContent={order.length} color="primary">
                      <ShoppingCartOutlinedIcon className="text-white" />
                    </Badge>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
