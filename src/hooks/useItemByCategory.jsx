import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const useItemByCategory = (categoryId) => {
  const [category, setCategory] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const categoryQuery = query(collection(db, 'products'), where('category' , '==' , categoryId));
    getDocs(categoryQuery).then((snapshot) => setCategory(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))))
    .catch((e) => console.error(e))
    .finally(() => setLoading(false))
  },[categoryId])
    return {category,loading}
}
