import React from 'react'
import { useParams } from 'react-router'
import { useItemByCategory } from '../hooks';
import { ItemListContainer, Loader } from '../components';

export const Category = () => {
  const {id} = useParams();
  const {category,loading} = useItemByCategory(id);

  return loading ? <Loader/> : <ItemListContainer products={category}/>
}
