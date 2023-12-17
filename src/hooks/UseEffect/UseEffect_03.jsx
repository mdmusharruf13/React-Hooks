import React, { useEffect, useState } from 'react'

function UseEffect_03() {

    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    useEffect(() => {
        document.title = `${otherCount} new messages!`;
    },[otherCount]);

    return (
        <>
            <h3>Count : {count} new messages</h3>
            <button onClick={() => setCount(count+1)}>increment</button>

            <h3>Other count : {otherCount} new messages</h3>
            <button onClick={() => setOtherCount(otherCount+1)}>increment</button>
        </>
    )
}

export default UseEffect_03