import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();


const note = {
    id: 10,
    date: 0,
    title: 'Hello',
    body: 'world',
    url: 'https://someplace.com/img.jpg'
};

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);

describe('Tests for JournalEntry component', () => {
   
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should activate the note', () => {
        wrapper.find('div.journal__entry').simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(note.id, note)
        );
    });
    
});