import { Box } from "@chakra-ui/react";
import { NavBar } from "../../src/components/NavBar";
const MainLayout = ({children}) => {
return <Box >
    <NavBar></NavBar>
{children}
</Box>
};
export default MainLayout;