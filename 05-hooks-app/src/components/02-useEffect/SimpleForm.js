import React, { useEffect, useState } from 'react'

import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey');
    }, []); // Se llama al efecto solo cuando el componente es motado

    useEffect(() => {
        // console.log('hey');
    }, [formState]); // Se llama al efecto solo cuando se detecta un cambio sobre el formState

    useEffect(() => {
        // console.log('hey');
    }, [email]); // Se llama al efecto solo cuando se detecta un cambio sobre la propiedad email del estado

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }; 

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text" name="name" className="form-control"
                    placeholder="Tu nombre" autoComplete="off"
                    value={name} onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <input
                    type="email" name="email" className="form-control"
                    placeholder="email@gmail.com" autoComplete="off"
                    value={email} onChange={handleInputChange} />
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}
