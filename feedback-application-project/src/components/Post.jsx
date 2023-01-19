import React from 'react'
import { useParams } from 'react-router-dom'

// useParams is a hook for react.

function Post() {  
   const params = useParams()

  return (
    <div>
        <h1>POST {params.id}</h1>
        <h2>Name: {params.name}</h2>
    </div>
  )
}

export default Post