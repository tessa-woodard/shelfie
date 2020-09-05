import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

function Dashboard(props) {
    const deleteProduct = id => {
        axios
            .delete(`/api/inventory/${id}`)
            .then(() => {
                props.getInventory()
            })
            .catch((error) => alert(error, "No Product was found to remove"))
    }

    return (
        <div className="inventory_container">
            {props.inventory.map((item) => (
                <Product
                    item={item}
                    deleteProduct={deleteProduct}
                    updateProduct={props.updateProduct}
                />
            ))}
        </div>
    )
}

export default Dashboard