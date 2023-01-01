import { Flex, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import AppMenu from "../AppMenu/AppMenu";

export type AppLayoutProps = {
    children: any;
}

const AppLayout = (props: AppLayoutProps) => {
    return (
        <Flex direction="column" h="full">
            <AppHeader />
            <Flex direction="row" flex="1">
                <Show above="md">
                    <AppMenu />
                </Show>
                <Outlet />
            </Flex>

        </Flex>
    )
}

export default AppLayout;