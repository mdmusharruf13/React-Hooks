import React, { useState } from 'react'

function UseState_04() {

    const [count, setCount] = useState(function(){
        console.log("count use State run");
        return 4;
    });
    return (
        <>
            <button onClick={() => setCount(count-1)}>-</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>+</button>
        </>
    )
}

export default UseState_04