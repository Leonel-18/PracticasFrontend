import React, { useState } from 'react';
import '../index.css';
import Modal from '../components/Modal';
import {ModalLogin} from '../components/ModalLogin'; // Asegúrate de importar correctamente

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const cerrarModal = () => setIsOpen(false);
    const cerrarModalLogin = () => setIsLoginOpen(false);

    return (
        <>
            <div className="navbar">
                <button onClick={() => setIsLoginOpen(true)}>Login</button>
                <button onClick={() => setIsOpen(true)}>Registrarse</button>
            </div>

            <Modal abierto={isOpen} onClose={cerrarModal} />
            <ModalLogin abierto={isLoginOpen} onClose={cerrarModalLogin} />
        </>
    );
};

export default Navbar;
