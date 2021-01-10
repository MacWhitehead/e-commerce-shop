import React, { useEffect, useState } from "react";
import PopulateProducts from "./Product";
import { Link } from "react-router-dom";

function Products() {
  useEffect(() => {
    getProducts()
  }, []);

  const styleLinks = {
    "textDecoration": "none",
    "color": "#2B303A",
  }
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProduct] = useState([]);
  const getProducts = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
    );
    const products = await data.json();
    setProducts(products);
    setCurrentProduct(products);
  };

  const onCategoryChange = (value) => {
    if (value === "all") {
      setCurrentProduct(products);
    } else {
      let filteredProducts = products.filter(
        (product) => product.category === value
      );
      setCurrentProduct(filteredProducts);
    }
  };

  const productsToRender = currentProducts;
  let productList = () => {
    if (productsToRender.length) {
      return productsToRender.map((product) => {
        return (
          <Link key={product.id} to={`products/${product.id}`} style={styleLinks}>
            <PopulateProducts product={product} />
          </Link>
        );
      });
    } else {
      return "LOADING...";
    }
  };
  const FilteredProducts = () => {
    return (
      <select
        style={{"marginBottom": "20px"}}
        name="categories"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="default">Select category</option>
        <option value="all">All Items</option>
        <option value="headphones">Headphones</option>
        <option value="phone">Phone</option>
        <option value="tv">Television</option>
        <option value="small-appliance">Small Appliance</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="watch">Watch</option>
        <option value="action-camera">Action-Camera</option>
      </select>
    );
  };
  return (
    <>
      <div className="container text-center h-100">
      <h2 className='align-content-center' style={{"marginTop": "20px"}}>Welcome to Fancy Products LLC!</h2>
      <p>Our products are the highest quality.</p>
      <FilteredProducts />
      <div className='row row-cols-3 justify-content-center'>
      {productList()}
      </div>
      </div>
    </>
  );
}

export default Products;
