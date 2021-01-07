import React from "react";
import { Link } from "react-router-dom";
const PopulateProducts = (props) => {
  const styleImages = {
    "max-height": "150px",
  };
  const indProducts = {

    padding: "5px",
    border: "1px solid black",
  };
  return (
    <div style={indProducts} className="col">
      <h6>{props.product.title}</h6>
      <img
        src={props.product.img}
        style={styleImages}
        alt={props.product.title}
      />
      <p>${props.product.price}</p>
    </div>
  );
};
export default PopulateProducts;
