import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { productsFetchData } from "../../Redux/Actions/Index";
import PopulateProducts from "./Product";

function Products() {
  useEffect(() => {
    getProducts();
  }, []);

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
        return <PopulateProducts key={product.id} product={product} />;
      });
    } else {
      return "LOADING...";
    }
  };
  const FilteredProducts = () => {
      return (
    <select
      name="categories"
      onChange={(e) => onCategoryChange(e.target.value)}
    >
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
      <FilteredProducts />
      {productList()}
  </>
  )
}

// class Products extends Component {
//   componentDidMount() {
//     this.props.fetchData(
//       "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
//     );
//   }
//   render() {
//     const productsToRender = this.props.products;
//     let productList = () => {
//       if (productsToRender.length) {
//         return productsToRender.map((product) => {
//           return <PopulateProducts key={product.id} product={product} />;
//         });
//       } else {
//         return "LOADING...";
//       }
//     };
//     return productList();
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//     hasErrored: state.productsHasErrored,
//     isLoading: state.productsIsLoading,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(productsFetchData(url)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Products);

export default Products;
