import React from 'react';
import {BrowserRouter as  Router , Routes , Route , HashRouter} from 'react-router-dom';
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
<HashRouter basename="/">

  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/videos' element={<AllVideos/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
  </Routes>

  <Footer/>
  </HashRouter>
  );
}

export default App;
