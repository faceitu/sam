import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import getConfig from "./config";
import AppLayout from "./modules/core/AppLayout/AppLayout";
import ProductsDashboard from "./modules/products/ProductsDashboard";

const AuthenticatedRoot = () => {
    const auth0 = useAuth0();
    const [token, setToken] = useState<string>();

    useEffect(() => {
        auth0.getAccessTokenSilently()
            .then((accessToken) => {
                setToken(accessToken);
                axios.defaults.baseURL = getConfig().baseURL;
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            })
    }, []);


    return (
        <>
            {token &&
                <AppLayout>

                </AppLayout>
            }
        </>
    )
}

export default AuthenticatedRoot;