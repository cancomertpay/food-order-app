import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import OrderContext from "../../store/OrderContext";

function HeaderCardButton() {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);
  const orderContext = useContext(OrderContext);

  const { items } = orderContext;

  const ordersLength = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 100);

    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={cartContext.onShow}>
      <span className={classes.icon}>
        {" "}
        <CartIcon />{" "}
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ordersLength}</span>
    </button>
  );
}

export default HeaderCardButton;
