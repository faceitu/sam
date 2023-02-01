import { Link, VStack,  Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const AppMenu = () => {
    return (
        <VStack backgroundColor="#CCC">
            <Text>PRODUCTOS</Text>
            <Link as={ReactLink} to="products">Listado</Link>
            <Link as={ReactLink} to="newproducts">NuevoProductos</Link>
            <Text>UNIDADES DE MEDIDA</Text>
            <Link as={ReactLink} to="uom">Unidades de Medida</Link>

        </VStack>
    )
}

export default AppMenu;