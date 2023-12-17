import React from 'react'
import { useState } from 'react';

function UseState_01() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={handleIncrement}>increment</button>
        </>
    );
}

export default UseState_01;