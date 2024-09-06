import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  const [count, setCount] = useState(0);
  const quantityObj = (indice) => {

    setCount((prevCount) => prevCount + indice)
  }
  return <ChakraProvider>
    <NavBar></NavBar>
    <ItemListContainer  greeting="!Bienvenidos a KayFs!"/>
    <div>
      Valor del estado: {count}
      <button onClick={() => quantityObj(1)}>+</button>
      <button onClick={() => quantityObj(-1)}>-</button>
    </div>
  </ChakraProvider>;
};

export default App;