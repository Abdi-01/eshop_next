import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap from node_modules
// import 'bootstrap/dist/js/bootstrap.bundle'; // import bootstrap from node_modules
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
