import React, { useState } from 'react'

function UseState_02() {

    const [data, setData] = useState("");

    const handleInput = (value) => {
        setData(value);
    }
    return (
        <>
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>
            <p>Text : {data}</p>
        </>
    )
}

export default UseState_02