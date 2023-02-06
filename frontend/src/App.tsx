import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { CartPage, CheckoutPage,  HomePage } from "./pages";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrdersPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
