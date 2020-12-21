import React, { Component } from 'react'
import { connect } from 'react-redux';
import { productsFetchData } from '../../Redux/Actions/Index';
import Product from "./Product";


class Products extends Component {
    // state = {
    //     loading: false,
    //     title: [],
    //     photo: [],
    //     products: [],
    //     productsHasErrored: false, 
    //     isLoading: true,
    // }
    componentDidMount() {
        this.props.fetchData('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
    }
    render() {
        const productsToRender = this.props.products
        let productList = () => {
            if(productsToRender.length) {
                return productsToRender.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })
            } else {
                return 'LOADING...'
            }

        }
        return productList() 
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        hasErrored: state.productsHasErrored,
        isLoading: state.productsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(productsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
