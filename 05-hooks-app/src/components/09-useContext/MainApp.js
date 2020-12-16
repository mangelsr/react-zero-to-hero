import React, { useEffect, useState } from 'react';
import { AppRouter } from './AppRouter';

import { UserContext } from './UserContext';
import './style.css';


let initialUser = JSON.parse(localStorage.getItem('user'));
if (initialUser === null) {
    initialUser = {};
}

export const MainApp = () => {

    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter/>
        </UserContext.Provider>   
    )
}
