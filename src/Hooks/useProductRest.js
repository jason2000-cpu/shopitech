import React, { useEffect, useState } from 'react'

import axios from "axios"


const baseUrl = 'https://fakestoreapi.com';

function useProductRest() {
    const [products, setProducts ] = useState([]);


    useEffect(()=>{
        async function getProducts(){
            try {
                const response = await axios.get(`${baseUrl}/products?limit=5`)
                setProducts(response.data);
                console.log("RESPONSE DATA", response.data);
            } catch(err) {
                console.log(`${err} occured while fetching products`)
            }
        }
        getProducts();
    }, [])

    return products;
}

export default useProductRest;