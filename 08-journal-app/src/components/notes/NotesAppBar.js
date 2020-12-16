import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startFileUpload, startSaveNote } from '../../actions/notes';


export const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(note));
    };

    const handlePictureUpload = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startFileUpload(file));
        }
    };
    
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input id="fileSelector" type="file" accept="image/*" style={{display:'none'}} onChange={handleFileChange} />
            <div>
                <button onClick={handlePictureUpload} className="btn">
                    Picture
                </button>
                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
}
