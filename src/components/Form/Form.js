import React, { Component } from 'react'
// import Product from '../Product/Product'
import './Form.css'
import axios from 'axios'
// import { Link, withRouter } from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
            product_img: '',
            product_name: '',
            product_price: 0,
            isEdit: false
        }
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        this.setState({
            product_img: '',
            product_name: '',
            product_price: 0
        })
        // console.log('Canceled', this.state);
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(`${event.target.name} updated`, this.state);
    }

    // handleAddProduct = () => {
    //    console.log(this.state);
    //    this.props.addProduct(
    //       this.state.product_name, 
    //       +this.state.product_price, 
    //       this.state.product_img
    //    )
    // }

    addProduct = () => {
        const { product_name, product_price, product_img } = this.state;
        axios.post('/api/product', { product_name, product_price, product_img })
            .then(
                this.props.history.push('/')
            )
            .catch(console.log('Error adding to inventory'))
    }

    componentDidMount() {
        axios.get(`/api/product/${this.props.match.params.id}`)
            .then(res => {
                // const {product_name, product_price, product_img} = res.data;
                this.setState({
                    product_img: res.data[0].product_img,
                    product_name: res.data[0].product_name,
                    product_price: res.data[0].product_price
                })
                // console.log(this.props.match.params.id)
                // console.log(res.data);
                // console.log(this.state)
            })
    }

    editProduct = () => {
        const { product_name, product_price, product_img } = this.state;
        console.log(this.props);
        console.log(this.state);
        axios.put(`/api/product/${this.props.match.params.id}`, { product_name, product_img, product_price })
            .then(this.props.history.push(`/`))
            .catch(err => console.log(err));
    }

    render() {
        if (this.props.history.location.pathname !== '/add') {
            // this.state.isEdit = true;
        }
        // console.log(this.props);

        return (
            <div className="Form" alt="product form">
                {this.state.product_img ?
                    <img src={this.state.product_img} alt={"product"} className="form-image" />
                    :
                    <img src={this.state.defaultUrl} alt={"default"} className="form-image" />
                }
                <label>Image URL:</label>
                <input
                    type="text"
                    value={this.state.product_img}
                    name="product_img"
                    onChange={e => this.handleChange(e)}
                    placeholder="URL"
                />
                <label>Product Name:</label>
                <input
                    type="text"
                    value={this.state.product_name}
                    name="product_name"
                    onChange={e => this.handleChange(e)}
                    placeholder="Name"
                />
                <label>Price:</label>
                <input
                    type="text"
                    value={this.state.product_price}
                    name="product_price"
                    onChange={e => this.handleChange(e)}
                    placeholder="0"
                />
                <div className="form-button-box">
                    <button onClick={this.handleCancel}>Cancel</button>
                    {this.state.isEdit ?
                        <button onClick={this.editProduct}>Save Changes</button>
                        :
                        <button onClick={this.addProduct}>Add to Inventory</button>
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard