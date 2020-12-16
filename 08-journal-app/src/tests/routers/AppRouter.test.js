import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';

import { login } from '../../actions/auth';
import { firebase } from "../../firebase/firebase-config";
import { AppRouter } from '../../routers/AppRouter';


jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: 'abc',
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <AppRouter/>
        </MemoryRouter>
    </Provider>
);


describe('AppRouter component tests', () => {
   
    test('should call login if user is authenticated', async () => {

        let user;
        
        await act( async () => {
            const userCred = await firebase.auth()
                .signInWithEmailAndPassword('test@testing.com', '123456');
            
                user = userCred.user;

            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalled();

    });
    
});