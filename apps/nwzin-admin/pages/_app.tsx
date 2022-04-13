import { AppProps } from 'next/app';
import "@fontsource/montserrat/400.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head';
import './styles.css';

const colors = {
  primary: '#2adcb1',
  secondary: '#a11cf8',
  tertiary: '#fdc914',
  forthColor: '#fb2d5d',
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
