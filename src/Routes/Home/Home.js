import React, { useEffect, useState } from "react";
import {useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { fetchProducts } from '../../store/products/productReducer';
import ProductTile from '../../Components/ProductTile/ProductTile';
import './Home.css';


const Home = () => {
    const product = useSelector(state => state.product);
    const { products, isLoading, isError } = product;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);

    return (
        <div className='home-page'>
            <div className='home-title'>
                <h2>Store</h2>
            </div>
            <div className='home-product-layout'>
                {products.map((product) => {
                return <ProductTile className='product-tile' product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default Home;