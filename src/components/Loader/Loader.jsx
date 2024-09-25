import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CircleLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <Flex height={"100vh"} width={"100vw"} alignItems={"center"} justifyContent={"center"}>
        <CircleLoader color='darkcyan'/>
    </Flex>
  )
}