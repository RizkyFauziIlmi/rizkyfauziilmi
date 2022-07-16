import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const colorscript = extendTheme({ config })

export default colorscript