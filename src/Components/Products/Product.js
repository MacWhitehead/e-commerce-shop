import React from 'react'


const PopulateProducts = (props) => {
        const styleImages = {
            "max-height": "50px"
        }
        const borders = {
            'border-bottom': '1px solid black'
        }
        const indProducts = {
            'max-width': '200px',
            border: '1px solid black'
        }
    // console.log(props)
        return (
            <div style={indProducts}>
                <h6 style={borders}>{props.product.title}</h6>
                <img src={props.product.img} style={styleImages} alt={props.product.title}/>
                <p>${props.product.price}</p>
                
            </div>
        )
}
export default PopulateProducts;