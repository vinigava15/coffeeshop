import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';
import CadastrarCafe from './components/cadastrar_cafe';  
import MenuSuperior from './components/MenuSuperior';    
import Footer from './components/Footer';
import ManutencaoCafe from './components/manutencao_cafe';
import RankingCafes from './components/rating_coffee';
import FormularioLogin from './components/login';
import CadastrarUsuarios from './components/cadastrar_usuario';  

const ProtectedRoute = ({ children }) => {
  const { autenticado } = useAuth();
  const navigate = useNavigate();

  if (!autenticado) {
    navigate('/login');
    return null;
  }

  return children;
};

const RoutesWithAuth = () => {
  const { autenticado } = useAuth();

  return (
    <Router>
      {autenticado && <MenuSuperior />}
      <Routes>
        <Route path="/login" element={<FormularioLogin />} />
        <Route 
          path="/" 
          element={autenticado ? <Navigate to="/produto" replace /> : <FormularioLogin />} 
        />
        <Route path="/produto" element={<ProtectedRoute><CadastrarCafe /></ProtectedRoute>} />
        <Route path="/manutencao" element={<ProtectedRoute><ManutencaoCafe /></ProtectedRoute>} />
        <Route path="/user" element={<ProtectedRoute><CadastrarUsuarios /></ProtectedRoute>} />
        <Route path="/ranked" element={<ProtectedRoute><RankingCafes /></ProtectedRoute>} />
      </Routes>
      <Footer /> {/* Aqui está o rodapé */}
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <RoutesWithAuth />
    </AuthProvider>
  );
};

export default App;
