import React from "react";
import "./CartMessege.scss";
import { correct } from "../../utils/images";
function CartMessage() {
  return (
    <div className="cart-message">
      <div className="cart-message-icon">
        <img src={correct} alt="" />
      </div>
      <h6>An item has been added to your shopping cart</h6>
    </div>
  );
}

export default CartMessage;
