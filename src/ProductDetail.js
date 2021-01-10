import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ProductDetail({ match }) {
  useEffect(() => {
    fetchProducts();
  });

  const styleImages = {
    "maxHeight": "250px",
    "padding": "30px"
  };
  const styleProducts = {
    "maxHeight": "600px",
    "padding": "20px 30px",
  };

  const [product, setProducts] = useState([]);
  const fetchProducts = async () => {
    const fetchProduct = await fetch(
      `https://my-json-server.typicode.com/tdmichaelis/json-api/products/${match.params.id}`
    );
    const product = await fetchProduct.json();

    setProducts(product);
  };

  const dispatch = useDispatch();

  const addItem = (product) => {
    return {
      type: "ADD_ITEM",
      payload: {
        title: product.title,
        img: product.img,
        price: product.price,
        quantity: 1,
      },
    };
  };
  return (
    <div style={styleProducts}>
      <h5 style={{"margin": "0px 25px"}}>{product.title}</h5>
      <img src={product.img} alt={product.title} style={styleImages} />
      <p style={{"width": "450px"}}>Product Details: {product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => {
          dispatch(addItem(product));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductDetail;
