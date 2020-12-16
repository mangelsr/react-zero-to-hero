import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
                onClick={()=>setUser({ id:123, name:'Miguel' })}
                className="btn btn-primary">
                Login
            </button>
        </div>
    )
}
