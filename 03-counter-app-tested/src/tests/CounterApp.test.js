import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';


describe('Pruebas sobre componente CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Prueba de Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Prueba de valores por defecto', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp value={defaultValue} />);
        const textValue = wrapper.find('h2').text().trim();
        expect(defaultValue.toString()).toBe(textValue);
    });

    test('Debe de incrementar contador con boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');

    });

    test('Debe de decrementar contador con boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });

    test('debe de resetear el contador', () => {
        const defaultValue = 105;
        const wrapper = shallow(<CounterApp value  ={defaultValue} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(defaultValue.toString());
    });
    
    
});