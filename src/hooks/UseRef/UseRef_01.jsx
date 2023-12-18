import React, { useEffect, useRef, useState } from 'react'

function UseRef_01() {

    const [name, setName] = useState("");
    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        ref.current += 1;
    })

    return (
        <>
            <input type="text" ref={inputRef} onChange={(e) => setName(e.target.value)}/>
            <p>Name : {name}</p>
            <p>Render : {ref.current}</p>
        </>

    )
}

export default UseRef_01