import React, { useEffect } from "react";
import "./HomePage.scss";
import Slider from "../../components/slider/Slider";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/slice/categorySlice";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../redux/slice/productSlice";
import ProductList from "../../components/productList/ProductList";
import Loader from "../../components/loader/Loader";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";
function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);

  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products
    .slice(0, 4)
    .filter((product) => product.category === categories[0]);
  let catProductsTwo = products
    .slice(4, 9)
    .filter((product) => product.category === categories[1]);
  let catProductsThree = products
    .slice(0, 14)
    .filter((product) => product.category === categories[2]);
  let catProductsFour = products
    .slice(0, 19)
    .filter((product) => product.category === categories[3]);

  return (
    <main>
      <div className="slider-wrapper">
        <Slider />
      </div>
      <div className="main-content">
        <div className="container">
          <div className="categories">
            <div className="categories-item">
              <div className="title">
                <h3>SEE OUR PRODUCTS</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>
            <div className="categories-item">
              <div className="title">
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>
            <div className="categories-item">
              <div className="title">
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>
            <div className="categories-item">
              <div className="title">
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>
            <div className="categories-item">
              <div className="title">
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
