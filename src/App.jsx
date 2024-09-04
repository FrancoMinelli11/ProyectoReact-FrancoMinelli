import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [count, setCount] = useState(0);
  const quantityObj = (indice) => {

    setCount((prevCount) => prevCount + indice)
  }
  return <ChakraProvider>
    <NavBar></NavBar>
    <div>
      Valor del estado: {count}
      <button onClick={() => quantityObj(1)}>+</button>
      <button onClick={() => quantityObj(-1)}>-</button>
    </div>
  </ChakraProvider>;
};

export default App;