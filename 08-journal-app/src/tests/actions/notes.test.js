import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

import { fileUpload } from '../../helpers/fileUpload';


const mockUrl = 'https://hola-mundo.com/cosa.jpg';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => mockUrl)
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING' //se puede dejar mockeado
    },
    notes: {
        active: {
            id: '0Q3r7kN5XXiWNJhxUqvl'
        }
    }
}

let store = mockStore(initState);

describe('Tests over notes actions', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    });
    
    test('should create a new note startNewNote', async () => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();

        const payload = {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number)
        };

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload
        });

        const { payload:{id} } = actions[0];
        await db.doc(`TESTING/journal/notes/${id}`).delete();
    });

    test('should start loading notes', async () => {
        await store.dispatch(startLoadingNotes('TESTING'));
        
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('should start save note', async () => {
        const note = {
            id: '0Q3r7kN5XXiWNJhxUqvl',
            title: 'titulo',
            body: 'cuerpo',
        };
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdated);
        const docRef = await db.doc(`TESTING/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);
    });

    test('should upload the image and update entry', async () => {
        const file = new File([], 'foto.png');
        await store.dispatch(startUploading(file));
        const docRef = await db.doc(`TESTING/journal/notes/${initState.notes.active.id}`).get();
        expect(docRef.data().url).toBe(mockUrl);
    });
    
});