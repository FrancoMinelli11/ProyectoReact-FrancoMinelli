import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Contador from "./components/Contador/Contador";
import MainLayout from "./components/MainLayout/MainLayout";

const App = () => {
  return <ChakraProvider>
    <MainLayout>
    <ItemListContainer  greeting="!Bienvenidos a KayFs!"/>
    </MainLayout>
    <Contador></Contador>
  </ChakraProvider>;
};

export default App;