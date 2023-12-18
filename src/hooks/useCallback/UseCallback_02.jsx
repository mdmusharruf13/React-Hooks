import React, { useCallback } from 'react'
import { useState } from 'react'
import PrintTable from './PrintTable';

function UseCallback_02() {

    const [num, updateNum] = useState(0);
    const [dark, updateDark] = useState(false);

    const optimisedCalc = useCallback(() => {
      return [num*1, num*2, num*3, num*4, num*5];
    }, [num]);

    const styles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div style={styles}>
          <h2>with useCallback hook</h2>
            <input
                type="number"
                onChange={(e) => updateNum(e.target.value)} 
                value={num}
            />
            <p>numbers : </p>
            <PrintTable calculateTable={optimisedCalc}/>
            <button onClick={() => updateDark(!dark)}>toggle</button>
        </div>
    )
}

export default UseCallback_02