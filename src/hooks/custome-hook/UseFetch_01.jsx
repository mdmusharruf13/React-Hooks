import React from 'react'
import useFetch from './useFetch'

function UseFetch_01() {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {data.map((res) => {
        return (
          <h4 key={res.id}>{res.id}. {res.name}</h4>
        )
      })}
    </>
  )
}

export default UseFetch_01