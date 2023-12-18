import React from 'react'
import { useState } from 'react'
import PrintTable from './PrintTable';

function UseCallback_01a() {

    const [num, updateNum] = useState(0);
    const [dark, updateDark] = useState(false);

    const styles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    const calculateTable = () => {
        return [num*1, num*2, num*3, num*4, num*5];
    }

    return (
        <div style={styles}>
            <h2>without useCallback hook</h2>
            <input
                type="number"
                onChange={(e) => updateNum(e.target.value)} 
                value={num}
            />
            <p>numbers : </p>
            <PrintTable calculateTable={calculateTable}/>
            <button onClick={() => updateDark(!dark)}>toggle</button>
        </div>
    )
}

export default UseCallback_01a