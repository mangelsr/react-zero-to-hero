import React from 'react';


export const Small = React.memo(({ value }) => {
    console.log('Componente <Small /> renderizado');
    return (
        <small>
            { value }
        </small>
    );
})