import '@testing-library/jest-dom';
import React from 'react'
// import { render } from '@testing-library/react';
// import PrimeraApp from '../PrimeraApp';

import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en PrimeraApp', () => {
    // Prueba con configuraciones solamente con JEST
    // test('Deberia mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render(<PrimeraApp saludo='Hola, Soy Goku' />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Deberia mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = '...';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo} 
                subtitulo={subtitulo}
            />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(subtitulo).toBe(textoParrafo);
    });
    
});