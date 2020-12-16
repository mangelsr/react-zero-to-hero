import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({handleAddTodo}) => {

    const [ { desc }, handleInputChange, reset ] = useForm({ desc: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (desc.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false
        }

        handleAddTodo(newTodo);

        reset();
    };

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="desc"
                    placeholder="Aprender..."
                    autoComplete="off"
                    className="form-control"
                    value={desc}
                    onChange={handleInputChange}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-2 ">
                    Agregar
                </button>
            </form>
        </>
    )
}
