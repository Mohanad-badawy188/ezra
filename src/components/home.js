import React from "react";

import homeCardsItems from "./home-cards-items";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import HomeProps from "./homeProps";

function Home() {
  return (
    <div>
      <Header />
      <div className="height">
        <div className="background ">
          <div className=" home-heading text-white ">
            <h1 className=""> Make Your Home a Paradise</h1>
            <h4>
              {" "}
              Transform Your Home Into an Oasis With Lush, Fully-Grown
              Houseplants
            </h4>
            <h4>To be Human Is to Experience Biophilia.</h4>

            <Link to={"/store"}>
              <button
                type="button"
                className="btn btn-success pt-2 pb-2 ps-4 pe-4 mt-4">
                {" "}
                SHOP NOW
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-success pt-2 pb-2 ps-4 pe-4 mt-4 ms-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container ">
          <h1 className="text-center pt-5 pb-5"> Why Ezraa</h1>
          <div className="d-flex row text-center pb-5">
            <div className="col-4">
              <div>
                {" "}
                <img
                  src={require("../pics/leaf.png")}
                  height="70"
                  alt="leaf"
                />{" "}
              </div>
              <h3 className="mt-4">Unbeatable quality</h3>
              <p>start your dream garden with the highest quality seeds</p>
            </div>

            <div className="col-4">
              <div>
                {" "}
                <img
                  src={require("../pics/plant.png")}
                  height="70"
                  alt="leaf"
                />{" "}
              </div>
              <h3 className="mt-4">Delivery to your door</h3>
              <p> buy your favourite plants to style your house </p>
            </div>

            <div className="col-4">
              <div>
                {" "}
                <img
                  src={require("../pics/save-plants.png")}
                  height="70"
                  alt="leaf"
                />{" "}
              </div>
              <h3 className="mt-4">All the help you need</h3>
              <p> call our Agriculture engineers to help you in your garden</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-5"> More Ways To Find Your Perfect Plant ! </h2>
        <div className="d-flex pt-5 pb-5">
          {homeCardsItems.map((item) => (
            <HomeProps
              name={item.name}
              description={item.description}
              img={item.img}
              cat={item.cat}
              btn={item.btn}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
