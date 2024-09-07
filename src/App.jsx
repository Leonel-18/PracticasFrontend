import { NavLogin } from './components/NavLogin.jsx';
import { Nav } from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu } from './page/Menu.jsx';
import { Usuario } from './page/Usuario';  // Importa tu componente de usuarios
import { ModalLogin } from './components/ModalLogin.jsx'
import { Footer } from './components/Footer.jsx';

function App() {
  // Hook para obtener la ubicación actual
  const location = useLocation();

  return (
    <>
      {location.pathname === '/menu' && <Nav />}
      {location.pathname === '/login' && <NavLogin />}
      <Routes>
        <Route path="/login" element={<ModalLogin />} />  {/* Ruta para el login */}
        <Route path="/usuario" element={<Usuario />} />  {/* Ruta para la página de usuarios */}
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
