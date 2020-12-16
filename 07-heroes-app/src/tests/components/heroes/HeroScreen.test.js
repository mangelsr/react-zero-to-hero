import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/ui/heroes/HeroScreen';


describe('Tests over <HeroScreen /> component', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };
    
    test('should redirect if no arguments provided', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock} />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('should show a hero if param is correct', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen}/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should return previus screen with push', () => {
        const historyMock = {
            length: 2,
            push: jest.fn(),
            goBack: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={() => <HeroScreen history={historyMock} />}/>
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(historyMock.push).toBeCalledTimes(1);
        expect(historyMock.push).toBeCalledWith('/');
        expect(historyMock.goBack).toBeCalledTimes(0);
    });

    test('should return previus screen with goBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={() => <HeroScreen history={historyMock} />}/>
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(historyMock.goBack).toBeCalledTimes(1);
        expect(historyMock.push).not.toBeCalled();
    });


    test('should return redirect if not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider-not-found']}>
                <Route path="/hero/:heroId" component={() => <HeroScreen history={historyMock} />}/>
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('');
    });

});