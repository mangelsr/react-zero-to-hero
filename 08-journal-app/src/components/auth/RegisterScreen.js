import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from "validator";

import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { loading, msgError } = useSelector(state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        name: 'Angel',
        email: 'angel@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = e => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegister(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should match and be at least 6 characers'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <h3 className="auth__title">Register</h3>
            <form onSubmit ={handleRegister}>

                { msgError && 
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }
                
                <input onChange={handleInputChange} value={name} className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off"/>
                <input onChange={handleInputChange} value={email} className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off"/>
                <input onChange={handleInputChange} value={password} className="auth__input" type="password" placeholder="Password" name="password"/>
                <input onChange={handleInputChange} value={password2} className="auth__input" type="password" placeholder="Password confirmation" name="password2"/>
                
                <button disabled={loading} className="btn btn-primary btn-block mb-5" type="submit">Register</button>

                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </div>
    );
}
