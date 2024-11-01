import axios, { Axios } from "axios";

export async function getAllProducts () {
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductById (id) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategory (categoryId) {
    return await axios.get(`https://dummyjson.com/products/category/${categoryId}`)
}