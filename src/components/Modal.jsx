import React, { useState } from 'react';
import '../index.css';
import Axios from '../services/axios';

const Modal = ({ abierto, onClose }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
        clave: '',
        clave2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('/usuario', formData);
            console.log('Usuario registrado:', response.data);
            onClose(); // Cerrar el modal después de la solicitud exitosa
        } catch (error) {
            console.error('Error registrando usuario:', error);
        }
    };

    if (!abierto) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Registrarse</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </label>
                    <label>
                        Apellido:
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                    </label>
                    <label>
                        Dirección:
                        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Clave:
                        <input type="password" name="clave" value={formData.clave} onChange={handleChange} />
                    </label>
                    <label>
                        Reescribir Clave:
                        <input type="password" name="clave2" value={formData.clave2} onChange={handleChange} />
                    </label>
                    <button type="submit">Registrarse</button>
                    <button type="button" onClick={onClose}>Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
