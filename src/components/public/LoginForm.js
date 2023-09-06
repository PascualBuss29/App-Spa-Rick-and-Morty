import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Manejador de cambios para actualizar el estado cuando se ingresan datos
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejador para enviar el formulario (simplemente muestra los datos en la consola en este ejemplo)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Usuario:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Iniciar sesión
                        </button>
                    </form>
                    <p className="mt-3">
                        ¿No tienes una cuenta? Regístrate{' '}
                        <Link to="/user-form">aquí</Link>.
                    </p>
                    <p className="mt-3">
                        ¿Necesitas volver al inicio? Ve a la página de{' '}
                        <Link to="/">inicio</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
