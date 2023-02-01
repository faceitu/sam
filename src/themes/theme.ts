import { extendTheme, theme } from "@chakra-ui/react"


export default extendTheme({
    colors: {
     
    
       primary:  theme.colors.cyan

    },
    components: {
        Button: {
            baseStyle: {
                borderLeftRadius: 9999,
                borderRightRadius: 9999
            }
        }
    }
  })