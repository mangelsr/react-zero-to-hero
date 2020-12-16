import '@testing-library/jest-dom';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';

import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';


describe('Tests for TodoApp component', () => {
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(()=>{});

    test('should redener component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add a todo', () => {
        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (${demoTodos.length})`);
        expect(localStorage.setItem).toBeCalledTimes(2);
    });

    test('should delete a todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe(`Todo App (0)`);
    });


    

});