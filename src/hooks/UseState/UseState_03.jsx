import React, { useState } from 'react'

function UseState_03() {

    const [data, setData] = useState({count: 0, name: ''});

    const handleInput = (newName) => {
        setData((prev) => ({...prev, name: newName}));
    }

    const handleClick = () => {
        setData((prev) => ({...prev, count: prev.count +1}));
    }

    return (
       <>
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleClick}>increment</button>
            <p>data : {data.name}</p>
            <p>count : {data.count} </p>
       </>
    )
}

export default UseState_03