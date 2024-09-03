import './App.css';
import Navbar from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Usuario} from './page/Usuario';  // Importa tu componente de usuarios
import { ModalLogin } from './components/ModalLogin.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<ModalLogin />} />  {/* Ruta para el login */}
        <Route path="/usuario" element={<Usuario />} />  {/* Ruta para la página de usuarios */}
      </Routes>
    </Router>
  );
}

export default App;
