import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Tests for authReducer', () => {

    const initialState = {};
    
    test('should log user', () => {
        const payload = {
            uid: '123456',
            displayName: 'test'
        };
        const result = authReducer(initialState, {
            type: types.login,
            payload  
        });
        expect(result).toEqual({ name: payload.displayName, uid: payload.uid });
    });

    test('should log out user', () => {
        const result = authReducer(initialState, {
            type: types.logout
        });
        expect(result).toEqual(initialState);
    });

    test('should return default', () => {
        const result = authReducer(
            initialState, {
                type: types.notesAddNew
            }
        );
        expect(result).toEqual(initialState);
    });
    
});