import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [showRegister, setShowRegister] = useState(false);

    const handleShowRegister = ( e ) => {
        e.preventDefault();

        setShowRegister(!showRegister);


    }

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'f@gmail.com',
        lPassword: '12345647'
    });

    const { lEmail, lPassword } = formLoginValues;

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'Fernando',
        rEmail: 'f@gmail.com',
        rPassword: '1234567',
        rPassword2: '1234567'
    });

    const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        
        dispatch( startLogin(lEmail, lPassword) );
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if( rPassword !== rPassword2 ){
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
        }

        dispatch( startRegister( rEmail, rPassword, rName ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                {
                    (!showRegister) &&
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={ handleLogin }>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name='lEmail'
                                    value={lEmail}
                                    onChange={ handleLoginInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name='lPassword'
                                    value={lPassword}
                                    onChange={ handleLoginInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login"
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn-down" onClick={handleShowRegister}>Registrar...</button>
                            </div>
                        </form>
                    </div>
                }

                {
                    (showRegister) &&
                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={ handleRegister }>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="rName"
                                    value={ rName }
                                    onChange={ handleRegisterInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="rEmail"
                                    value={rEmail}
                                    onChange={ handleRegisterInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="rPassword"
                                    value={rPassword}
                                    onChange={ handleRegisterInputChange }
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    name="rPassword2"
                                    value={rPassword2}
                                    onChange={ handleRegisterInputChange }
                                />
                            </div>

                            <div className="form-group mb-2">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Crear cuenta" />
                            </div>
                            <div className="form-group mb-2">
                                <button className="btn-down" onClick={handleShowRegister}>Ya tienes una cuenta?...</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}