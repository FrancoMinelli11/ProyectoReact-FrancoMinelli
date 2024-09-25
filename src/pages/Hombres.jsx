import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.services";
import {Loader, ItemListContainer} from '../components'
export const Hombres = () => {
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

    return Anillo ? <Loader></Loader> : <ItemListContainer products={HombresP} />
};