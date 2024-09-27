import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/products.services';

export const useItemByCategory = (categoryId) => {
  const [category, setCategory] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    getCategory(categoryId)
    .then((res) => setCategory(res.data.products))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[categoryId])
    return {category,loading}
}
