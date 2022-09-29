import React from "react";
 
function Header (){
    return  (
    <header>

<nav className="navbar  bg-success navbar-expand-lg " >
    <div className="container ">
      <div >
        <p className="navbar-brand text-white">   <img className="navbar-brand circle" src={require('../pics/icon.ico')  }  height="55"  alt=""/>   EZRAA</p>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="  collapse navbar-collapse" id="navbarSupportedContent">

  <ul className=" navbar-nav ms-auto mb-2 mb-lg-0"   >
    
    <li id="home" className="ps-3 pe-3 nav-item removeUnderline nav-link "><a className="" href="/">HOME</a></li>
    <li id="contact" className="ps-3 pe-3 removeUnderline nav-link"><a href="/store">STORE</a></li>
    <li id="about" className="ps-3 pe-3 removeUnderline nav-link" ><a href="/about">ABOUT US</a></li>
    <li id="contact" className="ps-3 pe-3 removeUnderline nav-link "><a href="/contact">CONTACT US</a></li>
    <li id="contact" className="ps-3 pe-3 removeUnderline nav-link"><a href="/login">LOGIN</a></li>
    <li id="contact" className="ps-3 pe-3 removeUnderline nav-link"><a href="/signup">SIGNUP</a></li>

  </ul>
  </div>
       
    </div>
  </nav>

        </header>

    )    
}
export default Header