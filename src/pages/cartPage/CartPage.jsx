import React from "react";
import "./CartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { shopping_cart } from "../../utils/images";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
} from "../../redux/slice/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <img src={shopping_cart} alt="" />
          <span className="empty-text">Your shopping cart is empty</span>
          <Link className="shopping-btn" to="/">
            Go shopping Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-cont">
          <div className="cart-cont-blog">
            <div className="cart-blog">
              <div className="cart-ctr">
                <span className="cart-item">S.N.</span>
              </div>
              <div className="cart-ctr">
                <span className="cart-item">Product</span>
              </div>
              <div className="cart-ctr">
                <span className="cart-item">Unit Price</span>
              </div>
              <div className="cart-ctr">
                <span className="cart-item">Quantity</span>
              </div>
              <div className="cart-ctr">
                <span className="cart-item">Total Price</span>
              </div>
              <div className="cart-ctr">
                <span className="cart-item">Actions</span>
              </div>
            </div>
          </div>
          <div className="cart-body">
            {carts.map((cart, idx) => {
              return (
                <div key={cart?.id} className="cart-ctr">
                  <div className="cart-bl">
                    <span className="cart-item">{idx + 1}</span>
                  </div>
                  <div className="cart-bl">
                    <span className="cart-item">{cart?.title}</span>
                  </div>
                  <div className="cart-bl">
                    <span className="cart-item">
                      {formatPrice(cart?.discountedPrice)}
                    </span>
                  </div>
                  <div className="cart-bl">
                    <div className="qty-change">
                      <button
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        }
                        className="qty-decrease"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="qty-value">{cart?.quantity}</div>
                      <button
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        }
                        className="qty-increase"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">
                      {formatPrice(cart?.totalPrice)}
                    </span>
                  </div>
                  <div className="cart-ctd">
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeFromCart(cart?.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-cfoot">
            <div className="cart-cfoot-l">
              <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                <i className="fas fa-trash"></i>
                <span className="mx-1">Clear Cart</span>
              </button>
            </div>
            <div className="cart-cfoot-r">
              <div className="total-txt">
                <div className="cart-total-item">Total({itemsCount})</div>
                <span className="cart-total-amount">{formatPrice(totalAmount)}</span>
              </div>
              <button className="checkout-btn">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
