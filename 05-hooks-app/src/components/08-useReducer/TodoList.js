import React from 'react'

import { TodoListItem } from './TodoListItem'


export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, i) => 
                <TodoListItem
                    key={todo.id}
                    i={i}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            )}
        </ul>
    )
}
