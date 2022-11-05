import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import React from "react";
const UserContext = React.createContext(null);
const UserData = React.createContext();

export function useCart() {
  return useContext(UserContext);
}

export function UserInfo() {
  return useContext(UserData);
}

export function CartProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchUserProduct = async () => {
      if (user) {
        const TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
        let userId = JSON.parse(localStorage.getItem("user")).foundUser._id;
        const res = await axios({
          method: "get",
          url: `http://localhost:5000/api/cart/find/${userId}`,
          headers: { token: `Bearer ${TOKEN}` },
        });
        if (res.data) {
          setOrder(res.data);
        }
      }
    };
    fetchUserProduct();
  }, [setOrder]);

  const ProviderValue = useMemo(() => ({ order, setOrder }), [order, setOrder]);
  return (
    <UserData.Provider value={user}>
      <UserContext.Provider value={ProviderValue}>
        {children}
      </UserContext.Provider>
    </UserData.Provider>
  );
}
