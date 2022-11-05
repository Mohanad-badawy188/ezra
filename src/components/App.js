import React from "react";
import { CartProvider } from "./userContext";

import Router from "./Route";

const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
};

export default App;
