import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

function Cart() {
  const productList = useSelector((state) => state.itemsList);
  const totalPrice = useSelector((state) => state.itemsTotalPrice);
  const totalProducts = useSelector((state) => state.numberOfItems);

  console.log(productList);

  const dispatch = useDispatch();

  const removeProduct = (item, index) => {
    return {
      type: "REMOVE_ITEM",
      payload: {
        title: item.title,
        price: item.price,
        index: index,
      },
    };
  };
  const addProduct = (item, index) => {
    return {
      type: "ADD_ITEM",
      payload: {
        title: item.title,
        price: item.price,
        index: index,
      },
    };
  };

  const displayProducts = productList.map((product, index) => (
    <div className="border border-dark" style={{ "max-width": "450px" }}>
      <h6>{product.title}</h6>
      <p>${product.price}</p>
      <img
        style={{ "max-height": "100px" }}
        src={product.img}
        alt={product.title}
      />
      <div style={{ "max-width": "250px" }}>
        <div className="row" >
          <button className="col-sm" onClick={dispatch(addProduct(product))}>
            <BsArrowBarUp />
          </button>
          <p className="col-sm">{product.quantity}</p>
          <button className="col-sm">
            <BsArrowBarDown />
          </button>
        </div>
      </div>
      <div>
        <button
          className="btn btn-danger border border-secondary"
          onClick={() => dispatch(removeProduct(product, index))}
        >
          Delete Product
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>
        {totalProducts === 0
          ? "Cart is empty"
          : `${totalProducts} Item${totalProducts > 1 ? "s" : ""} in cart`}
      </h1>
      <div>{displayProducts}</div>
      <div>Your total is: ${totalPrice}</div>
    </div>
  );
}

export default Cart;

//Local storage for cart and login?
//Function to increment/decrement items in cart
//Nav bar add in total items
