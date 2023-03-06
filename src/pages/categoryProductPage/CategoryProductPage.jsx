import React, { useEffect } from "react";
import "./CategoryProductPage.scss";
import ProductList from "../../components/productList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from "../../redux/slice/categorySlice";
import Loader from "../../components/loader/Loader";
import { STATUS } from "../../utils/status";

function CategoryProductPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProduct = useSelector(getAllProductsByCategory);
  
  const categoryProductStatus = useSelector(getCategoryProductsStatus);
  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="cat-products">
      <div className="container">
        <div className="cat-products-cont">
          <div className="title">
            <h3>
              <span className="cat-span">{category}</span>
            </h3>
          </div>
          {categoryProductStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <ProductList products={categoryProduct} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryProductPage;
