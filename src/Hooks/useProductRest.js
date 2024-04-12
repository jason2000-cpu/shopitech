'use client'

import React, { useEffect, useState } from 'react'

import axios from "axios"

const baseUrl = 'https://fakestoreapi.com';

function useProductRest() {
    const [products, setProducts ] = useState([]);
    const [productsLoading, setLoading] = useState(true);

    useEffect(()=>{
        async function getProducts(){
            try {
                await fetch('/api/products')
                .then(res => res.json())
                .then(json =>{
                    console.log("JSON OUTPUT:::::",json);
                    setProducts(json);
                    setLoading(false);
                })
            } catch (error) {
                setLoading(false);
                console.log(error, "Occured while fetching products");
            }
        }

        getProducts();
        
    }, [])
    

    console.log(products);
    return {products, productsLoading};
}


export default useProductRest;