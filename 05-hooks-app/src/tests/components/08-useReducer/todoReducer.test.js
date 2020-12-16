import '@testing-library/jest-dom';

import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Tests over todoReducer', () => {
    
    test('should return default value', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should add a todo', () => {
        const newTodo = {
            id: '3',
            desc: 'Learn angular',
            done: false
        };
        const state = todoReducer(demoTodos, {
            type: 'ADD',
            payload: newTodo
        });
        expect(state.length).toBe(demoTodos.length + 1);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('should delete a todo', () => {
        const deletedId = 1;
        const state = todoReducer(demoTodos, {
            type: 'DELETE',
            payload: deletedId
        });
        expect(state.length).toBe(demoTodos.length - 1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('should toggle a todo', () => {
        const toggledId = 1;
        const state = todoReducer(demoTodos, {
            type: 'TOGGLE',
            payload: toggledId
        });
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });

});