import React from "react";
const PopulateProducts = (props) => {
  const styleImages = {
    "maxHeight": "150px",
  };
  const indProducts = {
    border: "1px solid black",
    "marginBottom": "20px",
    "paddingTop": "15px",
  };
  return (
    <div style={indProducts} className="col">
      <img
        src={props.product.img}
        style={styleImages}
        alt={props.product.title}
      />
      <h6>{props.product.title}</h6>
      <p>Price: ${props.product.price}</p>
    </div>
  );
};
export default PopulateProducts;
