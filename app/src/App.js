import React from 'react';
import {BrowserRouter as  Router , Routes , Route} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Video from './Component/Video';

function App() {
  return (
  <Router>
    {/* <div>Hello Chakra_UI</div>
    <Button colorScheme={'facebook'} py={'4'} m={'5'}>Click</Button>
    <Button colorScheme={'whatsapp'}>Click</Button> */}

    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>

  <Footer/>
  </Router>
  );
}

export default App;
