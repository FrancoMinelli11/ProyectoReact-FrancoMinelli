import React from 'react'
import { ItemDetailContainer, Loader } from '../components'
import { useItemsById } from '../hooks'
import { useParams } from 'react-router'

export const ItemDetail = () => {
  const {id} = useParams()
  const {product,loading} = useItemsById(id)
  return (
    loading ? <Loader/> : <ItemDetailContainer item={product}/>
  )
}
