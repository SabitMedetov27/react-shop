import {
  HomePage,
  CartPage,
  CategoryProductPage,
  ProductSinglePage,
  SearchPage,
} from "./pages/index";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductSinglePage />} />
        <Route path="/category/:category" element={<CategoryProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
