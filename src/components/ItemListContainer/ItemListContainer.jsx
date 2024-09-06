import styles from './ItemListContainer.module.css'
const ItemListContainer = ({greeting}) => {
return(
    <h1 className={styles.titulo}>
        {greeting}
    </h1>
);
}

export default ItemListContainer