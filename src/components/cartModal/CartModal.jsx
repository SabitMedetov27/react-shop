import React, { useEffect, useRef } from "react";
import "./CartModal.scss";
import { shopping_cart } from "../../utils/images";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import {IoCloseSharp} from 'react-icons/io5'
function CartModal({ carts, setCartVisible }) {
  const modalRef = useRef();

  useEffect(() => {
    let closeModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setCartVisible(false);
      }
    };

    document.addEventListener("mousedown", closeModal);
  });

  return (
    <div className="cart-modal" ref={modalRef}>
      <h5 className="cart-modal-title">Recently Added Products</h5>
      <span className="cart-modal-close" onClick={() => setCartVisible(false)}><IoCloseSharp/></span>
      {carts.length > 0 ? (
        <div className="cart-modal-list">
          {carts.map((cart) => {
            return (
              <div key={cart.id} className="cart-modal-item">
                <div className="cart-modal-item-img">
                  <img className="img-cover" src={cart?.thumbnail} alt="" />
                </div>
                <div className="cart-modal-item-title">{cart?.title}</div>
                <div className="cart-modal-item-price">
                  {formatPrice(cart?.discountedPrice)}
                </div>
              </div>
            );
          })}
          <Link to="/cart" onClick={() => setCartVisible(false)} className="view-cart-btn">
            view my shopping cart
          </Link>
        </div>
      ) : (
        <div className="cart-modal-empty">
          <img src={shopping_cart} alt="" />
          <h5 className="cart-modal-empty-text">No products yet</h5>
        </div>
      )}
    </div>
  );
}

export default CartModal;
