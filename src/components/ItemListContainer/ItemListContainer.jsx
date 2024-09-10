import { useRef } from 'react';
import styles from './ItemListContainer.module.css'
import { Box, Button } from '@chakra-ui/react';
const ItemListContainer = ({greeting}) => {
    const h1Ref = useRef(null);
    const changeTitle = () => {
        h1Ref.current.innerHTML = "Bienvenidos al imperio de Lord Francol11👹";
    }
return(
    <Box style={{padding:5, marginTop:5,textAlign:"center"}}>
    <h1 className={styles.titulo} ref={h1Ref}>
        {greeting}
    </h1>
    <Button onClick={changeTitle} style={{color:"darkmagenta", background:"lightblue",textAlign:"center"}}>¡CAMBIO!</Button>
    </Box>
);
}

export default ItemListContainer