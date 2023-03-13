import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Cadastro from "./pages/components/pages/Cadastro";
import Navbar from "./pages/components/Layouts/Navbar";
import Footer from "./pages/components/Layouts/Footer";
import Container from './pages/components/Layouts/Container';
import HomePage from './pages/components/pages/HomePage';
import Login from './pages/components/pages/login';
import PerfilPage from './pages/components/pages/perfilPage';

function App() {

  return (
  
  <div>
    
      <Router> 
      <Container customClass="min-height">    
      <Navbar/>    
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/cadastro" element={<Cadastro/>}></Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/perfil" element={<PerfilPage/>}> </Route>
        </Routes>     
        </Container>
        <Footer/>
      </Router>
</div>  
 )
}

export default App;
