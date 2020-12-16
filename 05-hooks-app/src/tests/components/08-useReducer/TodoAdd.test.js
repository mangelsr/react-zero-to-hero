import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Tests TodoAdd component', () => {
    
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('should call handleAddTodo', () => {
        const value = 'Test todo';
        const input = wrapper.find('input');
        input.simulate('change', { target: { name: 'desc', value } });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(input.prop('value')).toBe('');
    });
    
});