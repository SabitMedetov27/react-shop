import React from "react";
import "./Loader.scss";
import { loader } from "../../utils/images";
function Loader() {
  return (
    <div className="container">
      <div className="loader">
        <img className="img-loader" src={loader} alt="" />
      </div>
    </div>
  );
}

export default Loader;
