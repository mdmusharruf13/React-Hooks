import React, { useEffect, useState } from 'react'

function PrintTable({ calculateTable }) {

    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        console.log("PrintTable runs!!");
        setNumbers(calculateTable());
    }, [calculateTable]);

    return (
        numbers.map((num, index) => <p key={index}>{num}</p> )
    )
}

export default PrintTable