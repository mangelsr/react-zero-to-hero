import React, { useState, useEffect } from 'react';


export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        };

        window.addEventListener('mousemove', mouseMove);

        console.log('Componente montado');

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Eres genial</h3>
            <p>
                x: {coords.x} y: {coords.y}
            </p>
        </>
    )
}
