import {Loader, ItemListContainer} from '../components'
import { useItems } from '../hooks';

export const Home = () => {
    const {Items , Anillo} = useItems('products');
    return Anillo ? <Loader></Loader> : <ItemListContainer products={Items} />
};