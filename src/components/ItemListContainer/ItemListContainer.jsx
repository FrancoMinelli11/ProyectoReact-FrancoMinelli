import { useRef } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import { Contador } from '../Contador';
import { Link } from 'react-router-dom';

//Renderizado ItemListContainer

export const ItemListContainer = ({products}) => {
    const {colorMode} = useColorMode();
    const h1Ref = useRef(null);
    const changeTitle = () => {
        h1Ref.current.innerHTML = "Bienvenidos al imperio de Lord Francol11👹";
    }
return(
    <Box style={{padding:5, marginTop:5,textAlign:"center"}}>
    <h1 style={{color: colorMode === "light" ? "darkblue" : "lightblue",textAlign:"center",fontSize:"2rem"}} ref={h1Ref}>
        ¡Bienvenidos a KayFs!
    </h1>
    <Button style={{color: colorMode === "light" ? "darkblue" : "lightblue",background:"darkmagenta"}} onClick={changeTitle}>¡CAMBIO!</Button>
    <Flex style={{flexWrap:"wrap",justifyContent:"space-around"}}>
        {products.map((item)=>{
            return(
                <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Link to={`/item/${item.id}`}>
          <Img
            src={
              item.thumbnail
            }
            roundedTop={'sm'}
            objectFit="contain"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
          </Link>
        </Box>
        <Box p={4}>
          <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
            <Text fontSize={'xs'} fontWeight="medium">
              ${item.price}
            </Text>
          </Box>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            {item.title}
          </Heading>
          <Text color={'gray.500'} noOfLines={2} >
{item.description}
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
        </HStack>
      </Box>
    </Center>
            )
        })}
    </Flex>
    <Contador></Contador>
    </Box>
    
);
}