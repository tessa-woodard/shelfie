import React, { Component } from 'react'
import './Product.css'
// import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
        }
    }

    editProduct = () => {
        const { product_name, product_price, product_img, product_id } = this.props.product;
        this.props.history.push(`/edit/${product_id}`)
        console.log(this.props.history)
    }

    render() {
        return (
            <div className="Product" alt="product">
                <div className="product-container">
                    {this.props.product.product_img ?
                        <img src={this.props.product.product_img} alt={"product"} className="product-image" />
                        : <img src={this.state.defaultImg} alt={"default"} className="product-image" />
                    }
                    <section className="product-information">
                        <p>
                            {this.props.product.product_name}
                        </p>
                        <p>
                            ${this.props.product.product_price}
                        </p>
                    </section>
                </div>
                <div className="product-button-box">
                    <button onClick={() => this.editProduct()} >Edit</button>
                    <button onClick={() => this.props.delete(this.props.product.product_id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Product)