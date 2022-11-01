import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DeleteOutline } from "@mui/icons-material";
import axios from "axios";
import { UserContext } from "./userContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
  @media (max-width: 1380px) {
    display: block;
    align-items: center;
    text-align: center;
    margin-top: 5px;
  }
`;
const DeleteItem = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto 0;
  margin-top: 20px;
`;
const Btn = styled.div`
  cursor: pointer;
`;

function Product(props) {
  const { order, setOrder } = useContext(UserContext);
  const TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
  const userId = JSON.parse(localStorage.getItem("user")).foundUser._id;
  const [isLoading, setIsLoading] = useState(false);
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
    <div className=" mt-5 pb-5">
      <div className="d-flex ">
        <img height="220vh" src={props.imgURL} />
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
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  planterImg: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Product;
