import React from "react";
import BgIcon from "../assets/images/bag-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slices/cartSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpenCart = (open) => {
    dispatch(toggleCart(open));
  };

  const cartQuantity = cartItems.length;

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>Ecommerce</h4>
            <div className="nav_menu">
              <div
                className="cart_icon"
                title="Cart"
                onClick={() => handleOpenCart(true)}
              >
                <img src={BgIcon} alt="Bag icon" />
                <span className="badge">{cartQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
