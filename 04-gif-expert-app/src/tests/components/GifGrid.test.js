import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid />', () => {
   
    test('Debe mostrarse el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category='Shaman King' />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items al cargar imagenes', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier.gif',
            title: 'Titulo'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category='Shaman King' />);
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
});