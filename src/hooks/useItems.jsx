import React from 'react'
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const useItems = (collectionName) => {
    const [HombresP,setHombresP] = useState([]);
    const [Anillo,setAnillo] = useState(true);
    useEffect(()=>{
        const itemsCollection = collection(db, collectionName)
        
        getDocs(itemsCollection)
        .then((snapshot) => {setHombresP(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))})
        .catch((e) => console.error(e))
        .finally(() => setAnillo(false))
    },[]);
  return {HombresP,Anillo}
}
