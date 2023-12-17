import React, { useContext } from 'react'
import { loginContext } from './MainContext';


function UseContext_02() {

    const login = useContext(loginContext);

    return (
        <>
            <h3>Data Recieved : {login[0]} {login[1]}</h3>
        </>
    )
}

export default UseContext_02