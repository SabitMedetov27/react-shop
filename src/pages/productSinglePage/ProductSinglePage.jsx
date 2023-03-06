import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductsSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../redux/slice/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";
import { formatPrice } from "../../utils/helpers";
import "./ProductSinglePage.scss";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../redux/slice/cartSlice";
import CartMessage from "../../components/cartMessage/CartMessage";

function ProductSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  useEffect(() => {
    dispatch(fetchAsyncProductsSingle(id));
    if (cartMessageStatus) {
      dispatch(setCartMessageOff());
    }
  }, [cartMessageStatus]);

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity + discountedPrice;
    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  return (
    <main className="productPage">
      <div className="product-single">
        <div className="container">
          <div className="product-single-cont">
            <div className="product-single-blog">
              <div className="product-img">
                <div className="product-img-zoom">
                  <img
                    className="img-cover"
                    src={
                      product ? (product.images ? product.images[0] : "") : ""
                    }
                    alt=""
                  />
                </div>
                <div className="product-img-thumbs">
                  <div className="thumb-item">
                    <img
                      className="img-cover"
                      src={
                        product ? (product.images ? product.images[1] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      className="img-cover"
                      src={
                        product ? (product.images ? product.images[2] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      className="img-cover"
                      src={
                        product ? (product.images ? product.images[3] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      className="img-cover"
                      src={
                        product ? (product.images ? product.images[4] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-single-r">
              <div className="product-details">
                <div className="title">{product?.title}</div>
                <div>
                  <p className="para">{product?.description}</p>
                </div>
                <div className="info">
                  <div className="rating">
                    <span className="rating-span">Rating:</span>
                    <span className="rating-text">{product?.rating}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="brand-span">Brand:</span>
                    <span className="brand-text">{product?.brand}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="brand-span">Category:</span>
                    <span className="brand-text">
                      {product?.category ? product.category : ""}
                    </span>
                  </div>
                </div>
                <div className="price">
                  <div className="price-cont">
                    <div className="price-span">
                      {formatPrice(product?.price)}
                    </div>
                    <span className="price-text">Inclusive of all taxes</span>
                  </div>
                  <div className="price-blog">
                    <div className="new-price">
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className="discount">
                      {product?.discountPercentage}% OFF
                    </div>
                  </div>
                </div>
                <div className="qty">
                  <div className="qty-text">Quantity:</div>
                  <div className="qty-change">
                    <button
                      type="button"
                      className="qty-decrease"
                      onClick={() => decreaseQty()}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="qty-value">{quantity}</div>
                    <button
                      type="button"
                      className="qty-increase"
                      onClick={() => increaseQty()}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  {product?.stock === 0 ? (
                    <div className="qty-error">out of stock</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="btns">
                  <button type="button" className="add-cart-btn btn">
                    <i className="fas fa-shopping-cart"></i>
                    <span
                      onClick={() => {
                        addToCartHandler(product);
                      }}
                      className="btn-text"
                    >
                      add to cart
                    </span>
                  </button>
                  <button type="button" className="buy-now btn">
                    <span className="btn-text">buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartMessageStatus && <CartMessage />}
    </main>
  );
}

export default ProductSinglePage;
