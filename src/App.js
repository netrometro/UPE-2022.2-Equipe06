import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CadastroPage from "./pages/components/pages/Cadastro"
import Navbar from "./pages/components/Layouts/Navbar";
import Footer from "./pages/components/Layouts/Footer";
import Container from "./pages/components/Layouts/Container";
import HomePage from "./pages/components/pages/HomePage";
import Login from "./pages/components/pages/login";
import PerfilPage from "./pages/components/pages/perfilPage";
import Notebooks from "./pages/components/pages/notebooks";
import FormProduto from "./pages/components/forms/produto/formProduto";
import PaginaPagamento from "./pages/components/pages/paginaPagamento";
import { UserProvider } from "./pages/components/utils/userContext";
import Cart from "./pages/components/pages/carrinhoPage";
import { CartProvider } from "./pages/components/utils/cartContext";




function App() {
  return (
    <div>
      <Router>
        <UserProvider>
        <CartProvider>
        <Container customClass="min-height">
          <Navbar />
          <Routes>
           
            <Route exact path="/" element={<HomePage />}>
              {" "}
            </Route>{" "}
            <Route path="/cadastro" element={<CadastroPage />}>
              {" "}
            </Route>{" "}
            <Route path="/addPromo" element={<Login />}>
              {" "}
            </Route>{" "}
            <Route path="/login" element={<Login />}>
              {" "}
            </Route>{" "}
            <Route path="/perfil" element={<PerfilPage />}>
              {" "}
            </Route>{" "}
            <Route path="/notebooks" element={<Notebooks />}>
              {" "}
            </Route>{" "}
            <Route path="/cadastro/Produto" element={<FormProduto />}>
              {" "}
            </Route>{" "}
            <Route path="/pagamento" element={<PaginaPagamento />}>
              {" "}
            </Route>{" "}
            <Route path="/carrinho" element={<Cart />}>
              {" "}
            </Route>{" "}
          </Routes>{" "}
        </Container>{" "}
        <Footer />
        </CartProvider>
        </UserProvider>
      </Router>{" "}
    </div>
  );
}

export default App;
