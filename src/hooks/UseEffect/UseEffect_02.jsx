import React, { useEffect, useState } from 'react'

function UseEffect_02() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} new messages!`;
    }, []);

    // now useEffect runs only when our component get render first time

    return (
        <>
            <h1>{count} new messages</h1>
            <button onClick={() => setCount(count+1)}>increment</button>
        </>
    )
}

export default UseEffect_02