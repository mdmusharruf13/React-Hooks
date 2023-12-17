import React, { useEffect, useState } from 'react'

function UseEffect_01() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} new messages!`;
    });

    return (
        <>
            <h1>{count} new messages</h1>
            <button onClick={() => setCount(count+1)}>increment</button>
        </>
    )
}

export default UseEffect_01;