import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests for TodoListItem component', () => {

    const index = 0;
    const demoTodo = demoTodos[index];
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        i={index}
        todo={demoTodo}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('should match snapshot correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    });

    test('should call delete correclty', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toBeCalledWith(demoTodo.id);
    });

    test('should call toggle correclty', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toBeCalledWith(demoTodo.id);
    });

    test('should print description correctly', () => {
        const text = wrapper.find('p').text().trim();
        expect(text.includes(demoTodo.desc)).toBe(true);
        expect(text.includes((index+1).toString())).toBe(true);
    });


    test('should have complete class if true', () => {
        demoTodo.done = true;

        const wrapper = shallow(<TodoListItem
            i={0}
            todo={demoTodo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

        const text = wrapper.find('p');
        expect(text.hasClass('done')).toBe(true);
    });

});