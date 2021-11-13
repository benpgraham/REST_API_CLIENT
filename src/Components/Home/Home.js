import React, { useEffect, useState } from "react";
import { fetchProducts } from '../../apis/products';
import {useDispatch } from 'react-redux';


const Home = () => {

    const [data, setData] = useState([]);

    const loadProducts = async () => {
        const response = await fetchProducts();
        setData(response);
    }

    useEffect(() => {
        loadProducts();
    });

    return (
        <div>
            <h1>Home Page</h1>
            {data.map((product) => {
                return (
                    <div>
                        <h2>{product.name}</h2>
                        <h2>{product.price}</h2>
                        <h3>{product.description}</h3>
                        <p>{product.stock_level}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;

/*

 {data.map((product) => {
                return (
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                )
            })}

*/