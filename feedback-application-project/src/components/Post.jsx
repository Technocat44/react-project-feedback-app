import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

// useParams is a hook for react.

function Post() {  
   const params = useParams()
   const status = 200;
   const navigate = useNavigate()
    const onClick = () => {
        console.log("Hello")
        navigate('/about')
    }
   if(status === 404) {
    return <Navigate to="/notfound">
        <h1>Not found</h1></Navigate>
   }

  return (
    
    <div>
        <h1>POST {params.id}</h1>
        <h2>Name: {params.name}</h2>
        <button onClick={onClick}>Click</button>
   

    <Routes>
        <Route path='/show' element={<h1>Post/show path</h1>}>
        </Route>
    </Routes>
    </div>
  )
}

export default Post