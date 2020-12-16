import React, { useState } from 'react'

import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr/>

            <button
                onClick={()=>setShow(!show)}
                className="btn btn-primary my-5"
                >
                    Toggle
                </button>

            { show && <MultipleCustomHooks /> }
        </>
    );
}
