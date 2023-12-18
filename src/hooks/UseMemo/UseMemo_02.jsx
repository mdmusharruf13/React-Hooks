import React, { useMemo, useState } from 'react'

function UseMemo_02() {

    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    let momoizedFn = useMemo(() => {
        expensiveFn(num);
    }, [num])
    
    const styles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <div style={styles}>
            <input type="number" onChange={(e) => setNum(e.target.value)} />
            <h3>calculation2 : {momoizedFn}</h3>

            <button onClick={() => setDark(!dark)}>toggle</button>
        </div>
    )
}

function expensiveFn(n) {
    console.log("Loop Started");
    for (let i = 0; i < 100000000; i++) { }
    console.log("Loop Ended");
    return n;
}

export default UseMemo_02