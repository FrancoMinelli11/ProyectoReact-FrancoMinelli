import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cartState, setCartState] = useState([]);

    const addItem = (product, qtyItem) => {
        const existingProduct = cartState.find((item) => item.id === product.id);
    
        const availableStock = product.stock - (existingProduct ? existingProduct.qtyItem : 0);
    
        if (qtyItem > availableStock) {
            Swal.fire({
                icon:'error',
                title:'Stock insuficiente',
                text:`Solo quedan ${availableStock} disponibles`,
                confirmButtonText:'Aceptar'
                })
            return;
        }
    
        if (existingProduct) {
            setCartState(
                cartState.map((item) =>
                    item.id === product.id ? { ...item, qtyItem: item.qtyItem + qtyItem } : item
                )
            );
        } else {
            setCartState([...cartState, { ...product, qtyItem: qtyItem }]);
        }
    };
    

    const removeItem = (product) => {
        const existingProduct = cartState.find((item) => item.id === product.id);

        if (existingProduct) {
            if (existingProduct.qtyItem === 1) {
                setCartState(cartState.filter((item) => item.id !== product.id));
            } else {
                setCartState(
                    cartState.map((item) =>
                        item.id === product.id
                            ? { ...item, qtyItem: item.qtyItem - 1 }
                            : item
                    )
                );
            }
        }
    };
    const deleteItem = (product) => {
        setCartState(cartState.filter((item) => item.id !== product.id))
    }

    return (
        <CartContext.Provider
            value={{
                cartState,
                setCartState,
                addItem,
                removeItem,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
