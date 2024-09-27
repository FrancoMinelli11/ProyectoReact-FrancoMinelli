import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../services/products.services'

export const useItemsById = (id) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductById(id)
    .then((res) => {
        setProduct(res.data)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
},[])
return {product,loading}
}

