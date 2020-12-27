import { AuthProvider } from '../lib/auth'
import ChakraProvider from '../styles/chakraProvider'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    )
}

export default MyApp
