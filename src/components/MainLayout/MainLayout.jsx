import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
const MainLayout = ({children}) => {
return <Box >
    <NavBar></NavBar>
{children}
</Box>
};

export default MainLayout;