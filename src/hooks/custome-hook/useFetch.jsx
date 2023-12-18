import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [response, setResopnse] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setResopnse(data))
    }, []);
    return response;
}

export default useFetch