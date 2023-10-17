import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartProvider";
import OrderContextProvider from "./store/OrderProvider";

function App() {
  return (
    <OrderContextProvider>
      <CartContextProvider>
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </OrderContextProvider>
  );
}

export default App;
