import { ChakraProvider } from "@chakra-ui/react";
import Contador from "./components/Contador/Contador";
import MainLayout from "./components/MainLayout/MainLayout";
import Hombres from "./pages/Hombres";

const App = () => {
  return <ChakraProvider>
    <MainLayout>
    <Hombres></Hombres>
    </MainLayout>
    <Contador></Contador>
  </ChakraProvider>;
};

export default App;