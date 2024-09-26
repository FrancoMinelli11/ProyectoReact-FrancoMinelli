import React from 'react'
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/products.services';

export const useItems = () => {
    const [HombresP,setHombresP] = useState([]);
    const [Anillo,setAnillo] = useState(true);
    useEffect(()=>{
        getAllProducts()
        .then((res) => {
            setHombresP(res.data.products)
        })
        .catch((error) => {console.log(error)})
        .finally(() => {setAnillo(false)})
    },[]);
  return {HombresP,Anillo}
}
