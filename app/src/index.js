import { ColorModeScript  , ChakraProvider , theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />

    {/*                  If we enclosed main app in chakraprovider then it automatically apply basic stylying         */}

    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </StrictMode>
);

