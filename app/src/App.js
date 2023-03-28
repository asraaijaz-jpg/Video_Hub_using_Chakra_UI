import React from 'react';
import {BrowserRouter as  Router , Routes , Route} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import AllVideos from './Component/AllVideos';
import Upload from './Component/Upload';

function App() {
  return (
  <Router>
    {/* <div>Hello Chakra_UI</div>
    <Button colorScheme={'facebook'} py={'4'} m={'5'}>Click</Button>
    <Button colorScheme={'whatsapp'}>Click</Button> */}

    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/videos' element={<AllVideos/>}/>
    <Route path='/upload' element={<Upload/>}/>
  </Routes>

  <Footer/>
  </Router>
  );
}

export default App;
