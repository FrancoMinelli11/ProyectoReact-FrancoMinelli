import { Box } from "@chakra-ui/react"
import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
    const quantityObj = (indice) => {
      setCount((prevCount) => prevCount + indice)
    }
    return <Box>
    Valor del estado: {count}
    <button onClick={() => {
      if(count < 10){
        quantityObj(1)
      }else{quantityObj(0)}
    }}>+</button>
    <button onClick={() => {
      if(count > 0){
        quantityObj(-1)
      }else{quantityObj(0)}
    } }>-</button>
    </Box>
}

export default Contador