import React from 'react';
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notes';


export const JournalEntry = ({ id, date, title, body, url }) => {
    
    const dispatch = useDispatch();
    
    const noteDate = moment(date);

    const handleActivateNote = () => {
        dispatch(activateNote(id, {
            title, body, date, url
        }));
    };

    return (
        <div onClick={handleActivateNote} className="journal__entry pointer animate__animated animate__fadeIn">
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}>
                </div>
            }
            <div className="journall__entry-body">
                <p className="journall__entry-title">
                    { title }
                </p>
                <p className="journall__entry-content">
                    { body }
                </p>
            </div>

            <div className="journall__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>
        </div>
    );
}
