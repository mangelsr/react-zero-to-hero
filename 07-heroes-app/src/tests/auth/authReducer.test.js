import '@testing-library/jest-dom';

import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


describe('Tests over authReducer', () => {
    
    test('should return the default state', () => {
        const initialState = { logged: false };
        const defaultState = authReducer(initialState);
        expect(defaultState).toEqual(initialState);
    });

    test('should auth and set the user name', () => {
        const name = 'Miguel';
        const logedInState = authReducer({}, { type: types.login, payload: { name } });
        expect(logedInState).toEqual({
            logged: true,
            name
        });
    });

    test('should delete user name and set logged to false', () => {
        const logedOutState = authReducer({}, { type: types.logout });
        expect(logedOutState).toEqual({
            logged: false
        });
    });
    
});