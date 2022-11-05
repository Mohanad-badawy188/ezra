import React, { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import axios from "axios";
import { useLocation } from "react-router";
import { useCart, UserInfo } from "./userContext";
import Header from "./header";
import Footer from "./footer";

const ProductPage = () => {
  const [amount, setAmount] = useState(1);
  const [planter, setPlanter] = useState("burbank");
  const [planterImg, setPlanterImg] = useState(
    "https://m.media-amazon.com/images/I/71hx0Sm9PML._AC_UL320_.jpg"
  );
  const [product, setProduct] = useState({});
  const location = useLocation();
  const Id = location.pathname.split("/")[2];
  const userId = UserInfo().foundUser._id;
  const { order, setOrder } = useCart();

  useEffect(() => {
    const findProduct = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/product/find/" + Id
      );
      if (res.data) {
        setProduct(res.data);
      }
    };
    findProduct();
  }, [userId]);

  function clickHandler(event) {
    let planter = event.target.id;
    setPlanter(planter);

    if (planter === "burbank") {
      setPlanterImg(
        "https://m.media-amazon.com/images/I/71hx0Sm9PML._AC_UL320_.jpg"
      );
    } else if (planter === "upcycled") {
      setPlanterImg(
        "https://m.media-amazon.com/images/I/41Q86KNr1FS._AC_UL320_.jpg"
      );
    } else {
      setPlanterImg(
        "https://m.media-amazon.com/images/I/410N3XWTVEL._AC_UL320_.jpg"
      );
    }

    event.preventDefault();
  }

  const clickHandlerPlus = () => {
    setAmount(amount + 1);
  };
  const clickHandlerMinus = () => {
    if (amount === 1) {
      return;
    } else {
      setAmount(amount - 1);
    }
  };
  const TOKEN = UserInfo().accessToken;
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/cart",
        headers: { token: `Bearer ${TOKEN}` },

        data: {
          userId,
          products: { product, quantity: amount },
          planter: planterImg,
          planterName: planter,
        },
      });
    } catch (err) {
      console.log(err);
    }

    const fetchUserProduct = async () => {
      const res = await axios({
        method: "get",
        url: `http://localhost:5000/api/cart/find/${userId}`,
        headers: { token: `Bearer ${TOKEN}` },
      });
      if (res.data) {
        setOrder(res.data);
      }
    };

    fetchUserProduct();
  };

  return (
    <div>
      <Header />
      <div className=" product ">
        <div className="size">
          <img src={product.imgURL} />
        </div>
        <div className="size">
          <h1>{product.name}</h1>
          <h4 className="mt-5"> {product.desc}</h4>
          <h2 className="mt-5 price mb-5"> $ {product.price}</h2>
          <div>
            <h5> Planter : </h5>

            <form>
              <div className="d-flex ">
                <button
                  onClick={clickHandler}
                  style={{
                    border: planter === "upcycled" ? "solid black 1px" : "",
                  }}
                  id="upcycled"
                  className="d-flex  col-3 mt-3  planter justify-content-center">
                  <img
                    id="upcycled"
                    className="m-2 rounded "
                    src="https://m.media-amazon.com/images/I/41Q86KNr1FS._AC_UL320_.jpg
"
                  />
                  <p className="m-2" id="upcycled">
                    {" "}
                    Upcycled
                  </p>
                </button>

                <button
                  onClick={clickHandler}
                  id="burbank"
                  name={"ff"}
                  style={{
                    border: planter === "burbank" ? "solid black 1px" : "",
                  }}
                  className="d-flex  col-3 mt-3  planter justify-content-center">
                  <img
                    id="burbank"
                    className="m-2 rounded"
                    src="https://m.media-amazon.com/images/I/71hx0Sm9PML._AC_UL320_.jpg"
                  />

                  <p id="burbank" className="m-2">
                    {" "}
                    burbank
                  </p>
                </button>

                <button
                  onClick={clickHandler}
                  style={{
                    border: planter === "grow pot" ? "solid black 1px" : "",
                  }}
                  id="grow pot"
                  className="d-flex  col-3 mt-3   planter justify-content-center">
                  <img
                    id="grow pot"
                    className="m-2"
                    src="https://m.media-amazon.com/images/I/410N3XWTVEL._AC_UL320_.jpg"
                  />

                  <p className="m-2" id="grow pot">
                    {" "}
                    Grow pot
                  </p>
                </button>
              </div>
              <div className="d-flex">
                <div className="d-flex m-5 ps-5  ">
                  <span onClick={clickHandlerMinus}>
                    {" "}
                    <Unicons.UilMinus />{" "}
                  </span>
                  <div className="amount">{amount} </div>
                  <span onClick={clickHandlerPlus}>
                    {" "}
                    <Unicons.UilPlus />{" "}
                  </span>
                </div>

                <div>
                  <button
                    onClick={handleClick}
                    className="btn  btn-success w-100 m-5 ">
                    {" "}
                    Add To Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
