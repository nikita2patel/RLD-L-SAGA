import React from 'react'
import {  BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'


const Navigate = () => {
  return (
    <div>
       <BrowserRouter>
        {/* <Link to ='/'>Register</Link>
       <Link to="/Login" >Login</Link> */}
<Routes> 
<Route path="/" element={<Register/>}/>
<Route path='/Login' element={<Login/>}/>
</Routes>
</BrowserRouter>
  </div>
  )
}

export default Navigate












