import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../firebase'

export const useItemsById = (id) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const itemDoc = doc(db,'products', id);
        getDoc(itemDoc)
        .then((snapshot) => {setProduct({id: snapshot.id, ...snapshot.data()})})
        .catch((e) => console.error(e))
        .finally(() => setLoading(false))
},[])
return {product,loading}
}

