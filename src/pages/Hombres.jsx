import {Loader, ItemListContainer} from '../components'
import { useItems } from '../hooks';

export const Hombres = () => {
    const {HombresP , Anillo} = useItems();
    return Anillo ? <Loader></Loader> : <ItemListContainer products={HombresP} />
};