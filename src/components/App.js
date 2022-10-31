import React, { Component, useState, useEffect, useMemo } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

import Router from "./Route";

const App = () => {
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
        setOrder(res.data);
      }
    };
    fetchUserProduct();
  }, [setOrder]);

  const ProviderValue = useMemo(() => ({ order, setOrder }), [order, setOrder]);

  return (
    <UserContext.Provider value={ProviderValue}>
      <Router />
    </UserContext.Provider>
  );
};

export default App;
