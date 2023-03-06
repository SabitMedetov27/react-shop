import React from "react";
import "./Product.scss";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Link to={`/product/${product?.id}`} key={product.id}>
      <div className="product-item">
        <div className="category">{product?.category}</div>
        <div className="product-item-img">
          <img src={product?.images[0]} alt={product.title} />
        </div>
        <div className="product-item-info">
          <div className="brand">
            <span>Brand: </span>
            <span className="product-brand">{product?.brand}</span>
          </div>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">
            <span className="old-price">{formatPrice(product?.price)}</span>
            <span className="new-price">
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className="discount">
              ({product?.discountedPercentage}% Off)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
