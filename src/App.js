import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/components/pages/HomePage";
import Cadastro from "./pages/components/pages/Cadastro";
import Navbar from "./pages/components/Layouts/Navbar";
import Footer from "./pages/components/Layouts/Footer";
import Container from './pages/components/Layouts/Container';

function App() {
 return (
  
  <div>
    
      <Router> 
      <Container customClass="min-height">    
      <Navbar/>    
        <Routes>
          <Route exact path="/" ></Route>
          <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>     
        </Container>
        <Footer/>
      </Router>
</div>  
 )
}

export default App;
