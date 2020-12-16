import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Tests over <SearchScreen /> component', () => {
    
    test('should redner the component with the default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').exists()).toBe(true);
    });

    test('should redner the component with existing hero search', () => {
        const heroName = 'batman';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${heroName}`]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe(heroName);
    });

    test('should redner the component with non existing hero search', () => {
        const heroName = 'batman-not-existing';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${heroName}`]}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-warning').exists()).toBe(true);
    });

    test('should call push of history', () => {
        const inputText = 'batman';
        const histoyMock = {
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search`]}>
                <Route path="/search" component={() => <SearchScreen history={histoyMock} /> } />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', {
            target: { name: 'search', value: inputText }
        });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(histoyMock.push).toHaveBeenCalledWith(`?q=${inputText}`);
    });

});