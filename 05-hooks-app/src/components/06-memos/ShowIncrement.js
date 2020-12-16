import React from 'react'


export const ShowIncrement = React.memo(({ increment }) => {
    console.log('ShowIncrement component rendered');
    return (
        <>
            <button
                onClick={ ()=>increment(5) }
                className="btn btn-primary" >
                Incrementar
            </button>
        </>
    )
})