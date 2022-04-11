import { AppProps } from 'next/app';
import "@fontsource/montserrat/400.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head';
import './styles.css';

const colors = {
  background: '#0f0e17',
  primary: '#37BC64',
  secondary: '#72757e',
  tertiary: '#2cb67d'
}

const theme = extendTheme({ 
  colors,
  fonts: {
    heading: 'montserrat, sans-serif',
  }
 })

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
  <meta name="viewport" content="width=device-width" />
  <meta charSet="utf-8" />
  <title>NWZIN Mobile and Web Based Data collection Tool</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default CustomApp;
