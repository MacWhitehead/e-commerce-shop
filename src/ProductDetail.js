import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'

function ProductDetail({ match }) {
  useEffect(() => {
    fetchProducts();
  }, []);

  const styleImages = {
    "max-height": "150px",
  };

  const [product, setProducts] = useState([]);
  const fetchProducts = async () => {
    const fetchProduct = await fetch(
      `https://my-json-server.typicode.com/tdmichaelis/json-api/products/${match.params.id}`
    );
    const product = await fetchProduct.json();

    setProducts(product);
    console.log(product);
  };

  const dispatch = useDispatch();

  const addItem = (product) => {
      return {
          type: 'ADD_ITEM',
          payload: {
              title: product.title, 
              img: product.img, 
              price: product.price, 
              quantity: 1
          }
      }
  }
  console.log(product)
  return (
    <div>
      <div>
        <h6>{product.title}</h6>
        <img src={product.img} alt={product.title} style={styleImages}/>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => {
            dispatch(addItem(product))
        }}>Add to cart</button>
      </div>
    </div>
  );
}
export default ProductDetail;
