import React from 'react'


export const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item">
            <p
                onClick={() => handleToggle(todo.id)}
                className={`${todo.done && 'done'}`}>
                {i+1}. {todo.desc}
            </p>
            <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger">
                Delete
            </button>
        </li>
    )
}
