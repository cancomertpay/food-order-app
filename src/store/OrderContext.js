import { createContext } from "react";

const OrderContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default OrderContext;
