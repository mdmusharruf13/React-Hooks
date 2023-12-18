import React, { useState } from 'react'

function UseMemo_01() {

    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    const calculation = expensiveFn(num);
    
    const styles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <div style={styles}>
            <input type="number" onChange={(e) => setNum(e.target.value)} />
            <h3>calculation1 : {calculation}</h3>

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

export default UseMemo_01