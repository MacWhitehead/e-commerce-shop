import React, { Component } from 'react'

export default class ApiData extends Component {

    state = {
        loading: false, 
        products: []
    }
    async componentDidMount() {
        const url = "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({products: data[1].title})
        console.log(data[1].title)
        console.log(this.state.products)
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.products ? (
                <div>loading...</div>) : 
                (<div>{this.state.products}</div>)
                }
            </div>
        )
    }
}