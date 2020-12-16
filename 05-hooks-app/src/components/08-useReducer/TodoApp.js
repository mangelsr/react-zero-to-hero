import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'DELETE',
            payload: todoId
        };
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        const action = {
            type: 'TOGGLE',
            payload: todoId
        };
        dispatch(action);
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}