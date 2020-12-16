import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';

import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('Tests over <AppRouter /> component', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    
    test('should login if not authenticated', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should render DCComponent if is authenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Miguel'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });

});