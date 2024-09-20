import { useEffect, useState } from "react";
import ItemlistContainer from "../components/ItemListContainer/ItemListContainer"
import { getAllProducts } from "../services/products.services";
import Loader from "../components/Loader/Loader";
const Hombres = () => {
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

    return Anillo ? <Loader></Loader> : <ItemlistContainer products={HombresP} />
};

export default Hombres;