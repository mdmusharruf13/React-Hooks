import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react';

function UseLayoutEffect_02() {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    const countRef = useRef();
    const toggleRef = useRef();

    useEffect(() => {
        if(countRef.current != null) {
            const dimension = countRef.current.getBoundingClientRect();
            countRef.current.style.paddingTop = `${dimension.height}px`;
        }
    }, [count]);

    useLayoutEffect(() => {
        if(toggleRef.current != null) {
            const dimension = toggleRef.current.getBoundingClientRect();
            toggleRef.current.style.paddingTop = `${dimension.height}px`;
        }
    }, [toggle]);

    return (
        <>
            <button onClick={() => setCount(count+1)}>increment</button>
            <h3 ref={countRef}>count : {count}</h3>
            <br />
            <hr />
            <br />
            <button ref={toggleRef} onClick={() => setToggle(!toggle)}>toggle</button>
            <h3 ref={toggleRef}>state : {toggle.toString()}</h3>

        </>
    )
}

export default UseLayoutEffect_02;