import { useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../context";

export const CartWidget = () => {
  const { colorMode } = useColorMode();
  const {cartState} = useContext(CartContext);

  console.log(cartState)
  const totalItems = cartState?.reduce((acc,item) => acc + item.qtyItem, 0);

  return (
    <div
      style={{
        padding: '3px',
        margin: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: colorMode === 'light' ? 'pink' : 'lightblue', 
      }}
    >
      <BsCart2 />
      {totalItems}
    </div>
  );
};
