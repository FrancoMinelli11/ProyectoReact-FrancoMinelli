import { ChakraProvider } from "@chakra-ui/react";
import {Contador} from "./components/Contador";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { MainRouter } from "./router";
import { CartProvider } from "./context";

const App = () => {
  return (
    <ChakraProvider>
      <MainLayout>
        <CartProvider>
          <MainRouter/>
        </CartProvider>
      </MainLayout>
    </ChakraProvider>
);
};

export default App;