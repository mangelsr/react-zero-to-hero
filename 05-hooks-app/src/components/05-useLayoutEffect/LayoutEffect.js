import React, { useRef, useLayoutEffect, useState } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';
import './layout.css';


export const LayoutEffect = () => {
    
    const { counter, increment } = useCounter(1);
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    
    return (
        <>
            <h1>Breaking Bad Quotes using LayoutEffect</h1>
            <hr/>
            
            <div className="alert alert-info text-center">
                Loading...
            </div>
        
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">{ quote }</p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>
            

            <button onClick={increment} className="btn btn-primary">
                Siguiente Frase
            </button>
        </>
    )
}
