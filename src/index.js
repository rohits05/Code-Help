import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraBaseProvider, theme } from '@chakra-ui/react';
import 'font-awesome/css/font-awesome.min.css';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
    <ColorModeScript />
    <App />
    </ChakraBaseProvider>
  </StrictMode>
);


