import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        axios.get('/api/inventory')
            .then(res => {
                this.setState({
                    inventory: res.data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== prevProps) {
            axios.get('/api/inventory')
                .then(res => {
                    this.setState({ inventory: res.data })
                })
        }
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(res => {
                this.setState({
                    inventory: res.data
                })
            })
            .catch(console.log('Error with delete'))
    }

    render() {
        let displayList = this.state.inventory.map(element => {
            return <Product key={element.id} product={element} delete={this.deleteProduct} />
        })
        return (
            <div className="Dash" alt="product dashboard">
                <section className="list-container">
                    {displayList}
                </section>
            </div>
        );
    }
}

export default Dashboard