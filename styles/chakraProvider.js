import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const fonts = {
    body: 'Inter,system-ui, sans-serif',
}

const theme = extendTheme({ colors, fonts })

const ChacraProviderWithTheam = ({ children }) => {
    return (
        <ChakraProvider resetCSS theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export default ChacraProviderWithTheam
