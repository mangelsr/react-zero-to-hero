import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const value = 'new value';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
    });

    test('No debe de postear la informacion onSubmit', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de postear la informacion onSubmit', () => {
        const value = 'new value';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.props().value).toBe('');
    });
    
});
