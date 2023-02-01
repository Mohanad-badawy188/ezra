import React, { useEffect } from "react";
import axios from "axios";
import { useCart, UserInfo } from "./userContext";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Product from "./product";

const Cart = () => {
  const TOKEN = UserInfo().accessToken;
  const userId = UserInfo().foundUser._id;
  const { order, setOrder } = useCart();
  const totalPrice = order.reduce((total, item) => {
    return total + item?.products?.product?.price * item?.products?.quantity;
  }, 0);
  const API =
    "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnVZVzFsSWpvaU1UWTNOVEE0T1RVMk5TNDVORFExTXpVaUxDSmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TmpnMU5EZzNmUS5OU0lVY0pIMVlqYy1Zd1VCTHZMNVhQSW5UYlVJdThqdXEzaDNmMTdmTG0ydTZFRGxqUTVpLW1seGRhY3FXUFFiRzJDY25TRG1xOVAyN25QYnAweFlVdw==";

  useEffect(() => {}, []);

  const handleClick = async (e) => {
    if (totalPrice === 0) return;
    try {
      const AuthReq = async () => {
        let data = {
          api_key: API,
        };

        let request = await fetch("https://accept.paymob.com/api/auth/tokens", {
          method: "post",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        let response = await request.json();
        let token = response.token;
        OrderRegister(token);
      };

      const OrderRegister = async (token) => {
        let data = {
          auth_token: token,
          delivery_needed: "false",
          amount_cents: totalPrice || 14000,
          currency: "EGP",
          merchant_order_id: 5,

          items: [
            {
              name: "ASC1515",
              amount_cents: "500000",
              description: "Smart Watch",
              quantity: "1",
            },
            {
              name: "ERT6565",
              amount_cents: "200000",
              description: "Power Bank",
              quantity: "1",
            },
          ],
          shipping_data: {
            apartment: "803",
            email: "claudette09@exa.com",
            floor: "42",
            first_name: "Clifford",
            street: "Ethan Land",
            building: "8028",
            phone_number: "+86(8)9135210487",
            postal_code: "01898",
            extra_description: "8 Ram , 128 Giga",
            city: "Jaskolskiburgh",
            country: "CR",
            last_name: "Nicolas",
            state: "Utah",
          },
          shipping_details: {
            notes: " test",
            number_of_packages: 1,
            weight: 1,
            weight_unit: "Kilogram",
            length: 1,
            width: 1,
            height: 1,
            contents: "product of some sorts",
          },
        };
        let request = await fetch(
          "https://accept.paymob.com/api/ecommerce/orders",
          {
            method: "post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        let response = await request.json();
        const id = response.id;
        PaymentKey(token, id);
      };
      const PaymentKey = async (token, id) => {
        let data = {
          auth_token: token,
          amount_cents: totalPrice  || 14000,
          expiration: 3600,
          order_id: id,
          billing_data: {
            apartment: "803",
            email: "claudette09@exa.com",
            floor: "42",
            first_name: "Clifford",
            street: "Ethan Land",
            building: "8028",
            phone_number: "+201021991536",
            shipping_method: "PKG",
            postal_code: "01898",
            city: "cairo",
            country: "EGP",
            last_name: "Nicolas",
            state: "Utah",
          },
          currency: "EGP",
          integration_id: 3345414,
          lock_order_when_paid: "false",
        };

        let request = await fetch(
          "https://accept.paymob.com/api/acceptance/payment_keys",
          {
            method: "post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        let response = await request.json();
        let Thetoken = response.token;
        CardPayment(Thetoken);
        // WalletPayment(Thetoken);
      };

      const CardPayment = (TheToken) => {
        let IframeURL = `https://accept.paymob.com/api/acceptance/iframes/726466?payment_token=${TheToken}`;
        location.href = IframeURL;
      };
      const WalletPayment = async (TheToken) => {
        let data = {
          source: {
            identifier: "wallet mobile number",
            subtype: "WALLET",
          },
          payment_token: TheToken,
        };
        let request = await fetch(
          "https://accept.paymob.com/api/acceptance/payments/pay",
          {
            method: "post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        let response = await request.json();
        let Thetoken = response.token;
        console.log(response);
      };
      AuthReq();
    } catch (e) {
      console.log(e);
    }
    const res = await axios({
      method: "delete",
      url: `http://localhost:5000/api/cart`,
      headers: { token: `Bearer ${TOKEN}` },
    });
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
