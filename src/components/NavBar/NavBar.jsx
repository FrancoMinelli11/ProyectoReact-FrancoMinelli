import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { CartWidget } from '../CartWidget'
import { useItems } from '../../hooks'
import { Link } from 'react-router-dom'
import { CartDetails } from '../CartDetails'



export const NavBar = () => {
  const {HombresP} = useItems('categories')
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('#657166', 'darkcyan')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to={"/"}><Box>KayFs</Box></Link>
          <Menu>
            <MenuButton as={Button} cursor="pointer" style={{ marginLeft: 30 }}>
              Categorias
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {HombresP.map((category) => {
                return <MenuItem as={Link} to={`category/${category.slug}`} key={category.slug}>
                  {category.name}
                </MenuItem>
                    })}
            </MenuList>
          </Menu>
          <Box><a href="#">Nosotros</a></Box>
          <Box><a href="#">Hombres</a></Box>
          <Box><a href="#">Inicio</a></Box>
          <Box><a href="#">Mujeres</a></Box>
          <Box><a href="#">Contacto</a></Box>

          <Flex alignItems={'center'}>
          <Menu>
                <MenuButton
                  as={Button}
                  _hover={{bg:'transparent'}}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  mr={2}>
                  <CartWidget/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <CartDetails/>
                </MenuList>
              </Menu>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}