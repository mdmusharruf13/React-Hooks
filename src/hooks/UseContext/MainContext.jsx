import React, { createContext, useState } from 'react';

export const loginContext = createContext();

function MainContext({children}) {

    const [name, setName] = useState("musharruf");

    return (
        <loginContext.Provider value={[name,123]}>
            {children}
        </loginContext.Provider>
    )
}

export default MainContext;