import { Box } from "@chakra-ui/react";
import { NavBar } from "../../components/NavBar";
const MainLayout = ({children}) => {
return <Box >
    <NavBar></NavBar>
{children}
</Box>
};
export default MainLayout;