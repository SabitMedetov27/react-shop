import React from "react";
import "./ProductList.scss";
import Product from "../product/Product";
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.slice(0, 48).map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);
        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
}

export default ProductList;
