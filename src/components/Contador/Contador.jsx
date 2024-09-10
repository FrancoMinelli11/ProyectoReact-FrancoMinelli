import { Box } from "@chakra-ui/react"
import React, { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);
    const quantityObj = (indice) => {
      setCount((prevCount) => prevCount + indice)
    }
    return <Box>
    Valor del estado: {count}
    <button onClick={() => quantityObj(1)}>+</button>
    <button onClick={() => quantityObj(-1) }>-</button>
    </Box>
}

export default Contador