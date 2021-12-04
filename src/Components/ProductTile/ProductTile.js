import React from "react";
import './ProductTile.css';

const ProductTile = ({ product }) => {

    return (
        <div className='product-tile'>
            <div className='product-header'>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
            </div>
            <div className='product-image'>
                <img src={product.photo_url} alt="" width='200' height='200' />
            </div>
            <div className='product-description'>
                <h3>{product.description}</h3>
            </div>
            <div className='product-footer'>
                <p>STOCK: {product.stock_level}</p>
            </div>
        </div>
    );

};

export default ProductTile;