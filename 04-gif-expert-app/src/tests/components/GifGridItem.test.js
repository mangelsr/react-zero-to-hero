import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas de <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener el url y el alt', () => {
        const img = wrapper.find('img').props();
        expect(img.src).toBe(url);
        expect(img.alt).toBe(title);
    });

    test('Debe tener las clases de css ', () => {
        const div = wrapper.find('div').props();
        const classes = div.className.split(' ');
        expect(classes).toContain('card');
        expect(classes).toContain('animate__animated');
        expect(classes).toContain('animate__fadeIn');
    });

});