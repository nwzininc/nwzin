import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import "@fontsource/montserrat/400.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

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

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
     <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
