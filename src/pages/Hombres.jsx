import {Loader, ItemListContainer} from '../components'
import { useItems } from '../hooks';

export const Hombres = () => {
    const {HombresP , Anillo} = useItems('products');
    return Anillo ? <Loader></Loader> : <ItemListContainer products={HombresP} />
};