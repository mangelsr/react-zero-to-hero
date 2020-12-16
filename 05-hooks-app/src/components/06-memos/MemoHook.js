import React, { useState, useMemo } from 'react'

import { useCounter } from '../../hooks/useCounter'
import { heavyProces } from '../../helpers/heavyProcess';


export const MemoHook = () => {
    
    const [show, setShow] = useState(true);

    const { counter, increment } = useCounter(5000);

    const memoHeavyProces = useMemo(() => heavyProces(counter), [counter]);

    return (
        <>
            <h1>Memo Hook</h1>
            <hr/>

            <p>{ memoHeavyProces }</p>

            <h2>Counter: { counter }</h2>
            
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
