import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap from node_modules
// import 'bootstrap/dist/js/bootstrap.bundle'; // import bootstrap from node_modules
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-NQWFHSTWNR" />
      <Script>
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NQWFHSTWNR',{
            page_path:window.location.pathname,
          });
          `
        }
      </Script>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
