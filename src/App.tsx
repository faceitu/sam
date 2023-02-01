import { useAuth0 } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AuthenticatedRoot from './AuthenticatedRoot';
import { extendTheme} from "@chakra-ui/react";
import theme from '../src/themes/theme'




function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <ChakraProvider theme = {theme}>
      <AuthenticatedRoot/>
    </ChakraProvider>
    
  );
}

export default App;
