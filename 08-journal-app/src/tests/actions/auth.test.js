import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Auth actions tests', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });
   
    test('login and logout should create the correct action', () => {
        const uid = '12345';
        const displayName = 'Miguel';
        
        const loginAction = login(uid, displayName);
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.logout
        });
    });

    test('should do logout', async () => {
        await store.dispatch(startLogout());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.logout
        });
        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });
    });

    test('should startlogin with email & password', async () => {
        const email = 'test@testing.com';
        const password = '123456'; 
        const uid = 'BSQDDR4tQjeND2aBOdPAj2sQ6aG2'; 
        const displayName = null; 

        await store.dispatch(startLoginEmailPassword(email, password));
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.uiStartLoading
        });

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });
        
        expect(actions[2]).toEqual({
            type: types.uiFinishLoading
        });
    });

});