import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../store/slices/cartSlice";

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  const incrementHandler = (id) => {
    dispatch(incrementItem(id));
  };

  const decrementHandler = (id) => {
    dispatch(decrementItem(id));
  };

  const cartItemsQty = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      {isCartOpen && (
        <div id="cart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Cart <small>({cartItemsQty})</small>
              </h2>
              <div
                title="Close"
                className="close_btn"
                onClick={() => handleCloseCart(false)}
              >
                <span>&times;</span>
              </div>
            </div>
            <div className="cart_body">
              {cartItemsQty === 0 ? (
                <h2>Cart is empty</h2>
              ) : (
                cartItems.map((item) => {
                  const { id, img, title, price, quantity } = item;
                  const itemTotal = price * quantity;

                  return (
                    <div className="cart_items" key={id}>
                      <figure className="cart_items_img">
                        <img src={img} alt="" />
                      </figure>
                      <div className="cart_items_info">
                        <h4>{title}</h4>
                        <h3 className="price">
                          ₹ {itemTotal.toLocaleString()}
                        </h3>
                      </div>
                      <div className="cart_items_quantity">
                        <span onClick={() => decrementHandler(id)}>
                          &#8722;
                        </span>
                        <b>{quantity}</b>
                        <span onClick={() => incrementHandler(id)}>&#43;</span>
                      </div>
                      <div
                        title="Remove Item"
                        className="cart_items_delete"
                        onClick={() => removeItemHandler(id)}
                      >
                        <span>&times;</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="cart_foot">
              <h3>
                <small>Total:</small>
                <b>₹ {cartTotal.toLocaleString()}</b>
              </h3>
              <button className="checkout_btn">checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
