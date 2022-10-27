import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
import { DeleteOutline } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
`;
const DeleteItem = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;
const Btn = styled.div`
  cursor: pointer;
`;
const Cart = () => {
  const TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
  const userId = JSON.parse(localStorage.getItem("user")).foundUser._id;
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function Product(props) {
    const handleClick = async () => {
      try {
        setIsLoading(true);
        const res = await axios({
          method: "delete",
          url: `http://localhost:5000/api/Cart/${props.id}`,
          headers: { token: `Bearer ${TOKEN}` },
        });

        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <div className=" mt-5 pb-5">
        <div className="d-flex ">
          <img height="360px" src={props.imgURL} />
          <Container>
            <div className="product-details">
              <h5>Product : {props.name}</h5>
              <h5> price : $ {props.price} </h5>
              <h5>
                planter : <img src={props.planterImg} height="30px" />
              </h5>
              <h5> quantity : {props.quantity} </h5>
              <h5> total price : {props.total} </h5>
            </div>
            <DeleteItem>
              {" "}
              <Btn onClick={handleClick}>
                <DeleteOutline />
              </Btn>{" "}
            </DeleteItem>
          </Container>
        </div>
      </div>
    );
  }
  const totalPrice = order.reduce((total, item) => {
    return total + item.products.product.price * item.products.quantity;
  }, 0);

  useEffect(() => {
    const cart = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/cart/find/${userId}`,
          headers: { token: `Bearer ${TOKEN}` },
        });

        setOrder(res.data);

     
      } catch (e) {
        console.log(e);
      }
    };

    cart();

  }, [isLoading]);

  return (
    <div className="cart-page">
      <div className="title">YOUR BAG</div>
      <div className=" d-flex justify-content-between mt-5">
        <button className="btn cont-shopping">CONTINUE SHOPPING</button>
        <div className="d-flex  ">
          <h5 className="me-5 shopping-bag">YOUR SHOPPING BAG (2)</h5>
          <h5 className="shopping-bag">YOUR WISHLIST</h5>
        </div>
        <button className="btn check-out">CHECKOUT NOW</button>
      </div>
      <div className="d-flex">
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
              <h5> $ 5 </h5>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5>Shipping Discount</h5>
              <h5>$ -3</h5>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h2>Total</h2>
              <h5> $ {totalPrice + 2} </h5>
            </div>

            <button className="check-out">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart 
