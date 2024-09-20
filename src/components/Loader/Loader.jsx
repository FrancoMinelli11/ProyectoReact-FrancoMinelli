import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <Flex height={"100vh"} width={"100vw"} alignItems={"center"} justifyContent={"center"}>
        <CircleLoader color='darkcyan'/>
    </Flex>
  )
}

export default Loader