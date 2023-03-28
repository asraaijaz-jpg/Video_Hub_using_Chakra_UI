import React from 'react';
import {BrowserRouter as  Router , Routes , Route} from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import AllVideos from './Component/AllVideos';
import Upload from './Component/Upload';
import Login from './Component/Login';
import SignUp from './Component/SignUp';

function App() {
  return (
  <Router>
    
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
