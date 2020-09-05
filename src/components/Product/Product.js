import React from 'react'

function Product(props) {
    const { item: { id, name, price, img }, deleteProduct, updateProduct } = props
    return (
        <div className="inventory-container">
            <p className="inventory-text">{name}</p>
            <p className="inventory-text">{`$${price}`}</p>
            <img src={img} alt={`This is a ${name}`} />
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <button onClick={() => updateProduct(props.item)}>Update</button>
        </div>
    )
}


export default Product