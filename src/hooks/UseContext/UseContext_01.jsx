import React from 'react'
import MainContext from './MainContext'
import UseContext_02 from './UseContext_02'

function UseContext_01() {
    return (
        <MainContext>
            <UseContext_02 />
        </MainContext>
    )
}

export default UseContext_01;