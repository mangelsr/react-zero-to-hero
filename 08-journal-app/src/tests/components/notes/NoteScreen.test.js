import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';


jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
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
        active: {
            id: 1234,
            title: 'Hola',
            body: 'mundo',
            date: 0
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Tests for NoteScreen test', () => {
    
    test('should be showed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should dispatch activeNote', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hello again'
            }
        });
        expect(activeNote).toHaveBeenCalled();
        expect(activeNote).toHaveBeenLastCalledWith(
            1234, {
                id: 1234,
                title: 'Hello again',
                body: 'mundo',
                date: 0
            }
        );
    });
    
});