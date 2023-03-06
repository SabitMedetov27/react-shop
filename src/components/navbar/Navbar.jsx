import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../redux/slice/categorySlice";
import { setSidebarOn } from "../../redux/slice/sidebarSlice";
import CartModal from "../cartModal/CartModal";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../redux/slice/cartSlice";
import "./Navbar.scss";
function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [cartVisible, setCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
 console.log(cartVisible);
  const handleSearchTerm = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);


  return (
    <nav className="navbar">
      <div className="navbar-cont">
        <div className="navbar-com">
          <button
            onClick={() => dispatch(setSidebarOn())}
            className="navbar-btn"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link className="navbar-link" to="/">
            <span>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-logo">
              <span className="navbar-logo-text">Shop</span>ping
            </span>
          </Link>
        </div>
        <div className="navbar-search">
          <div className="navbar-input">
            <input
              type="text"
              className="nav-input"
              placeholder="Search your preferred items here"
              onChange={(e) => handleSearchTerm(e)}
            />
            <Link to={`search/${searchTerm}`}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>

        <div className="navbar-cart">
          <Link
            onMouseEnter={() => setCartVisible(true)}
          
            className="nav-cart-btn"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="nav-cart-item-value">{itemsCount}</div>
            {cartVisible && (
              <CartModal setCartVisible={setCartVisible} carts={carts} />
            )}
          </Link>
        </div>
      </div>
      <ul className="nav-ul">
        {categories.slice(0, 7).map((category, idx) => (
          <li key={idx} className="nav-li">
            <Link to={`category/${category}`} className="nav-link">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
