import React, { createContext, useState } from "react";

const CartContext = createContext({
  cartIsShow: false,
  onShow: () => {},
  onClose: () => {},
});

export default CartContext;
