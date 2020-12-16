import { db } from "../firebase/firebaseConfig";


export const loadNotes = async (uid) => {
    try {
        const notesSnap = await db.collection(`${uid}/journal/notes`).get();
        const notes = [];
        notesSnap.forEach( childSnap => notes.push({
            id: childSnap.id,
            ...childSnap.data()
        }));
        return notes;
    } catch (err) {
        console.log(err);
        return err;
    }
}; 