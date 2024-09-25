import { ChakraProvider } from "@chakra-ui/react";
import {Contador} from "./components/Contador";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { MainRouter } from "./router";

const App = () => {
  return <ChakraProvider>
    <MainLayout>
    <MainRouter/>
    </MainLayout>
  </ChakraProvider>;
};

export default App;