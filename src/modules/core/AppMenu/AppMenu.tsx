import { Link, VStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const AppMenu = () => {
    return (
        <VStack backgroundColor="#CCC">
            <Link as={ReactLink} to="products">Productos</Link>
            <Link as={ReactLink} to="uom">Unidades de Medida</Link>
        </VStack>
    )
}

export default AppMenu;