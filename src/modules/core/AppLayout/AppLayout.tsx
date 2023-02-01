import { Flex, Show,Stack,Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import FormuPost from "../../../Components/FormuPost/FormuPost";
import ListComponent from "../../../Components/ListoComponent/ListComponent";
import AppHeader from "../AppHeader/AppHeader";
import AppMenu from "../AppMenu/AppMenu";

export type AppLayoutProps = {
    children: any;
}

const AppLayout = (props: AppLayoutProps) => {
   console.log(props)
    return (
        <Flex direction="column" h="full">
            <AppHeader />
            <Flex direction="row" flex="1"> 
                <Show above="md">
                    <AppMenu />          
                </Show>
                <Stack w={'60%'} justify = 'center' m={'auto'}  border='1px' borderColor='cyan.200' p={20}>
                    <Outlet />
                </Stack> 
            </Flex>       
        </Flex>    
    )
}

export default AppLayout;