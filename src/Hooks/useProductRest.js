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
                    setProducts(json);
                    console.log("PRODUCTS FROM USE-EFFECT", products);
                    setLoading(false);
                })
            } catch (error) {
                setLoading(false);
                console.log(error, "Occured while fetching products");
            }
        }

        getProducts();
        
    }, [])

    
    return {products, productsLoading};
}


export default useProductRest;