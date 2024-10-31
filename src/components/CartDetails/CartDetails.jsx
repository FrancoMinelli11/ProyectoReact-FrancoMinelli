import { useContext } from "react";
import { CartContext } from "../../context";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Heading,
  Divider,
  VStack,
  HStack,
  Spacer,
  Alert,
  AlertIcon,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import {db} from '../../firebase'
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
export const CartDetails = () => {
  const { cartState, addItem, removeItem, deleteItem } =
    useContext(CartContext);
  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleCreateOrder = () => {
    const orderObj = {
      items:cartState.map((item) => {
        return{
          id:item.id,
          title:item.title,
          price:item.price,
          quantity:item.qtyItem
        }
      }),
      total:total
    }
    console.log(orderObj)
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection,orderObj).then(({id}) => {
      Swal.fire({
        icon:'info',
        title:`Se creó la orden con id: ${id}`,
        timer:'2000',
        showConfirmButton:false
      })
    })
    }
  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Detalles del Carrito
      </Heading>

      {cartState.length === 0 ? (
        <Alert status="info" borderRadius="md">
          <AlertIcon />
          Tu carrito está vacío.
        </Alert>
      ) : (
        <VStack spacing={4} align="stretch">
          {cartState.map((item) => (
            <Flex
              key={item.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              alignItems="center"
              boxShadow="sm"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
                mr={4}
              />
              <Box flex="1">
                <Text fontSize="xl" fontWeight="bold">
                  {item.title}
                </Text>
                <HStack spacing={4} mt={2}>
                  <Text>Precio: ${item.price.toFixed(2)}</Text>
                  <HStack>
                    <IconButton
                      aria-label="Disminuir cantidad"
                      icon={<MinusIcon />}
                      size="sm"
                      onClick={() => removeItem(item)}
                      isDisabled={item.qtyItem === 1}
                    />
                    <Text>{item.qtyItem}</Text>
                    <IconButton
                      aria-label="Aumentar cantidad"
                      icon={<AddIcon />}
                      size="sm"
                      onClick={() => addItem(item,1)}
                      isDisabled={item.qtyItem >= item.stock}
                    />
                  </HStack>
                </HStack>
              </Box>
              <Spacer />
              <HStack>
                <Text fontWeight="bold">
                  Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                </Text>
                <IconButton
                  aria-label="Eliminar producto"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleDeleteItem(item)}
                />
              </HStack>
            </Flex>
          ))}
          <Divider />
          <Flex alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
            <Spacer />
            <Button onClick={handleCreateOrder}>Crear Orden</Button>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};