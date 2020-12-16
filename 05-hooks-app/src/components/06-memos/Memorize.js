import React, { useState } from 'react'

import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';


export const Memorize = () => {
    
    const [show, setShow] = useState(true);

    const { counter, increment } = useCounter();

    return (
        <>
            <h1>Memorize</h1>
            <hr/>
            
            <h2>Counter: <Small value={counter} /></h2>
            
            <button onClick={increment} className="btn btn-primary">+1</button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ ()=>setShow(!show) }
            >
                Toggle { JSON.stringify(show) }
            </button>
        </>
    )
}
