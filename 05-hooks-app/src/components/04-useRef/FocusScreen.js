import React, { useRef } from 'react'


export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={inputRef}
                className="form-control" 
                placeholder="Su nombre"
            />

            <button onClick={handleClick} className="btn btn-outline-primary mt-5">Focus</button>
        </div>
    )
}
