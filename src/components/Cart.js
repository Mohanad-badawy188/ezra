import React from "react";
import axios from "axios";
import { useCart, UserInfo } from "./userContext";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Product from "./product";

const Cart = () => {
  const TOKEN = UserInfo().accessToken;
  const userId = UserInfo().foundUser.id;
  const { order, setOrder } = useCart();
  const totalPrice = order.reduce((total, item) => {
    return total + item.products.product.price * item.products.quantity;
  }, 0);

  const handleClick = async () => {
    if (totalPrice === 0) return;
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:5000/api/order`,
        headers: { token: `Bearer ${TOKEN}` },
        data: { userId, products: order, amount: totalPrice },
      });
    } catch (e) {
      console.log(e);
    }
    const res = await axios({
      method: "delete",
      url: `http://localhost:5000/api/cart`,
      headers: { token: `Bearer ${TOKEN}` },
    });

    location.reload();
  };

  return (
    <div>
      <Header />

      <div className="cart-page">
        <div className="title">YOUR BAG</div>
        <div className=" d-flex justify-content-between mt-5">
          <Link to={"/store"}>
            <button className="btn cont-shopping">CONTINUE SHOPPING</button>
          </Link>
          <div className="d-flex  ">
            <h5 className="me-5 shopping-bag">
              YOUR SHOPPING BAG ({order.length})
            </h5>
            <h5 className="shopping-bag">YOUR WISHLIST</h5>
          </div>
          <button className="btn check-out">CHECKOUT NOW</button>
        </div>
        <div className="orders">
          <div className="checkoutProducts">
            {order.map((item) => (
              <Product
                key={item._id}
                name={item.products.product.name}
                price={item.products.product.price}
                planterImg={item.planter}
                imgURL={item.products.product.imgURL}
                quantity={item.products.quantity}
                total={item.products.product.price * item.products.quantity}
                id={item._id}
              />
            ))}
            <hr className="product-hr"></hr>
          </div>
          <div className="summary">
            <h1 className="mb-5 mt-5 text-center">ORDER SUMMARY</h1>
            <div className="product-details">
              <div className="d-flex justify-content-between mb-3">
                <h5>Subtotal</h5>
                <h5> $ {totalPrice}</h5>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5>Estimated Shipping</h5>
                <h5> $ {order.length > 0 && 5}</h5>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5>Shipping Discount</h5>
                <h5>$ {order.length > 0 && -3}</h5>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h2>Total</h2>
                <h5> $ {order.length > 0 && totalPrice + 2} </h5>
              </div>

              <button className="check-out" onClick={handleClick}>
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
