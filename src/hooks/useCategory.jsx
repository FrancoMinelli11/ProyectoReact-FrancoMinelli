import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../services/products.services'

export const useCategory = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        getAllCategories()
    .then((res) => setCategories(res.data))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finalizado"))
    },[])
  return {categories}
}
