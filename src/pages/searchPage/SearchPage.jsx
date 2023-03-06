import React, { useEffect } from "react";
import "./SearchPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/loader/Loader";
import ProductList from "../../components/productList/ProductList";
import {
  fetchAsyncSearchProduct,
  getSearchProduct,
  getSearchProductStatus,
} from "../../redux/slice/searchSlice";
function SearchPage() {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProduct = useSelector(getSearchProduct);
  console.log(searchProduct);
  const searchProductStatus = useSelector(getSearchProductStatus);
  useEffect(() => {
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if (searchProduct.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "70vh",
        }}
      >
        <div className="search-no">
          <h3>No Products found.</h3>
        </div>
      </div>
    );
  }
  return (
    <main>
      <div className="search-conte">
        <div className="container">
          <div className="search-blog">
            <div className="title">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchProductStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={searchProduct} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
