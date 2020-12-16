import Swal from "sweetalert2";

import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime()
            };
            const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
            dispatch(activateNote(doc.id, newNote));
            dispatch(addNewNote(doc.id, newNote));
        } catch (err) {
            console.log(err);
        }
    };
};

export const activateNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            if (!note.url) {
                delete note.url;
            }
            const noteToFirestore = { ...note };
            delete noteToFirestore.id;
            
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
            
            dispatch(refreshNote(note.id, note));
            
            Swal.fire('Note saved', note.title, 'success');
        } catch (err) {
            console.log(err);
        }
    };
};

export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: { id, note }
});

export const startFileUpload = (file) => {
    return async (dispatch, getState) => {
        try {
            const { active:activeNote } = getState().notes;
            Swal.fire({
                title: 'Uploading',
                text: 'Please wait...',
                allowOutsideClick: false,
                onBeforeOpen: () => Swal.showLoading()
            });
            const fileUrl = await fileUpload(file);
            Swal.close();
            activeNote.url = fileUrl;
            dispatch(startSaveNote(activeNote));
        } catch (err) {
            console.log(err);
        }
    };
};

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        try {
            const uid = getState().auth.uid;
            await db.doc(`${uid}/journal/notes/${id}`).delete();
            dispatch(deleteNote(id));
        } catch (err) {
            console.log(err);            
        }
    };
};

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const clearNotes = () => ({
    type: types.notesLogoutClean
});

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});