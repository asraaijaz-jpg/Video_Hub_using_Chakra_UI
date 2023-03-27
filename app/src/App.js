import React from 'react';
import {BrowserRouter as  Router , Routes , Route} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function App() {
  return (
  <Router>
    <div>Hello Chakra_UI</div>
    <Button colorScheme={'facebook'}>Click</Button>
    <Button colorScheme={'whatsapp'}>Click</Button>
  <Routes>
    <Route/>
  </Routes>
  </Router>
  );
}

export default App;
