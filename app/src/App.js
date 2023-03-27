import React from 'react';
import {BrowserRouter as  Router , Routes , Route} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
  <Router>
    {/* <div>Hello Chakra_UI</div>
    <Button colorScheme={'facebook'} py={'4'} m={'5'}>Click</Button>
    <Button colorScheme={'whatsapp'}>Click</Button> */}

    <Header/>
    <Home/>
  <Routes>
    <Route/>
  </Routes>
  </Router>
  );
}

export default App;
