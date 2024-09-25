import { useColorMode } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";

export const CartWidget = () => {
  const { colorMode } = useColorMode();

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
      1
    </div>
  );
};
