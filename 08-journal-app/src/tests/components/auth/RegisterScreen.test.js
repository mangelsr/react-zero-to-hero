import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

// jest.mock('../../../actions/auth', () => ({
//     startGoogleLogin: jest.fn(),
//     startLoginEmailPassword: jest.fn()
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
// store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>
);

describe('Tests for RegisterScreen component', () => {
   
    // beforeEach(() => {
    //     store = mockStore(initState);
    //     // jest.clearAllMocks();
    // });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show email error', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        });
    });

    test('should show alert error', () => {
        const initState = {
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        };
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );
        const alertError = wrapper.find('div.auth__alert-error');
        expect(alertError.exists()).toBe(true);
        expect(alertError.text().trim()).toBe(initState.ui.msgError);
    });
    


    

});