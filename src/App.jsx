import { ChakraProvider } from "@chakra-ui/react";
import {Contador} from "./components/Contador";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { Hombres } from "./pages";

const App = () => {
  return <ChakraProvider>
    <MainLayout>
    <Hombres></Hombres>
    </MainLayout>
    <Contador></Contador>
  </ChakraProvider>;
};

export default App;