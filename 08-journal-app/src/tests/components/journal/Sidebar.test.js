import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startNewNote } from '../../../actions/notes';
import { startLogout } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '1',
        name: 'Miguel'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <Sidebar/>
    </Provider>
);


describe('Tests for Sidebar component', () => {
   
    test('should be showed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call startLogout', () => {
        wrapper.find('button.btn').simulate('click');
        expect(startLogout).toHaveBeenCalled();
    });

    test('should call startNewNote', () => {
        wrapper.find('div.journal__new-entry').simulate('click');
        expect(startNewNote).toHaveBeenCalled();
    });
    
});
