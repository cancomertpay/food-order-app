import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const onClose = () => {
    setCartIsShow(false);
  };

  const onShow = () => {
    setCartIsShow(true);
  };

  return (
    <CartContext.Provider
      value={{ cartIsShow: cartIsShow, onClose: onClose, onShow: onShow }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
