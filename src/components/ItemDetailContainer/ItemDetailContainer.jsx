import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { CartContext } from '../../context';
import Swal from 'sweetalert2';


export const ItemDetailContainer = ({item}) => {
  const [count, setCount] = useState(0);
  const {cartState,addItem} = useContext(CartContext)
  const handleAddItem = () => {
    const existingQtyInCart = cartState.find((cartItem) => cartItem.id === item.id)?.qtyItem || 0;
    const availableStock = item.stock - existingQtyInCart;
    
    const newCount = count + 1;
    if (newCount <= availableStock) {
        setCount(newCount);
    } else {
        Swal.fire({
          icon:'error',
          title:'Stock insuficiente',
          text:`Solo quedan ${availableStock} disponibles`,
          confirmButtonText:'Aceptar'
        })
    }
};
  const handleRemoveItem = () => {
    setCount(count - 1);
  };
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              item.images
            }
            fit={'content'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {item.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${item.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'lg'}>
                {item.description}
              </Text>
            </VStack>
            
          </Stack>

          <Flex alignItems={'center'} width={'20%'} justifyContent={'space-between'}>
            <Button onClick={handleRemoveItem} isDisabled={count === 0}>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleAddItem} isDisabled={count >= (item.stock - item.qtyItem)}>+</Button>
            </Flex>
            <Button onClick={() => {addItem(item, count)}} isDisabled={count === 0 || count > (item.stock - item.qtyItem)}>
    Agregar al carrito
</Button>
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
