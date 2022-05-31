import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { Provider } from 'react-redux';
import store from './store';

const colors = {
  primary: '#37BC64',
  secondary: '#a11cf8',
  tertiary: '#2cb67d'
}

const theme = extendTheme({ 
  colors,
  fonts: {
    heading: 'nunito, sans-serif',
  }
 })

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
