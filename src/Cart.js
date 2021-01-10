import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

const styleButtons = {
  width: "40px",
};
const styleImages = {
  "maxHeight": "250px",
  padding: "30px",
};
const styleProducts = {
  "maxHeight": "600px",
  padding: "20px 30px",
};

function Cart() {
  const productList = useSelector((state) => state.itemsList);
  const totalPrice = useSelector((state) => state.itemsTotalPrice);
  const totalProducts = useSelector((state) => state.numberOfItems);

  const dispatch = useDispatch();

  const removeProduct = (item, index) => {
    return {
      type: "REMOVE_ITEM",
      payload: {
        title: item.title,
        img: item.img,
        price: item.price,
        index: index,
      },
    };
  };
  const addProduct = (item) => {
    return {
      type: "ADD_ITEM",
      payload: {
        title: item.title,
        img: item.img,
        price: item.price,
      },
    };
  };

  const displayProducts = productList.map((product, index) => (
    <div key={index} className="border border-dark" style={styleProducts}>
      <img
        style={{ "maxHeight": "100px" }}
        src={product.img}
        alt={product.title}
      />
      <h6>{product.title}</h6>
      <p>${product.price}</p>
      <div>
        <div className="row">
          <button className="col-sm-4" style={styleButtons} onClick={() => dispatch(addProduct(product))}>
            <BsArrowBarUp/>
          </button>
          <p style={styleButtons} className="col-sm-4 text-center">{product.quantity}</p>
          <button className="col-sm-4" style={styleButtons} onClick={() => dispatch(removeProduct(product, index))}>
            <BsArrowBarDown />
          </button>
        </div>
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
      <div>Your total is: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
