import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import OrderContext from "../../store/OrderContext";
import CartItem from "./CartItem";

function Cart() {
  const cartContext = useContext(CartContext);
  const orderContext = useContext(OrderContext);

  const totalAmount = `$${orderContext.totalAmount.toFixed(2)}`;
  const hasItems = orderContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    orderContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    orderContext.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {orderContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onShow = cartContext.cartIsShow ? (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={cartContext.onClose}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  ) : (
    ""
  );

  return <>{onShow}</>;
}

export default Cart;
