import React, { useEffect, useLayoutEffect, useState } from 'react'

function UseLayoutEffect_01() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect runs");
    }, [count]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect runs");
    }, [count]);

    return (
        <>
            <h3>count : {count}</h3>
            <button onClick={() => setCount(count+1)}>increment</button>
        </>
    )
}

export default UseLayoutEffect_01