import React from 'react'
import useState from 'react'
import {  SignIn  } from '@clerk/clerk-react';
function Login() {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
     
{ isLoggedIn?<h1> hello</h1>:<h1> xx</h1>}
<button onClick={()=>setIsLoggedIn(true)}>login </button>
<button onClick={()=>setIsLoggedIn(true)}>logout </button>
    </div>
  )
}

export default Login
