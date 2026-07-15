import React from 'react'
import { useState } from 'react'

const App = () => {
  const[name,setName]=useState('Arul')
  const[count,setCount]=useState(0)
  const[status,setStatus]=useState(false)
  const [theme,setTheme]=useState('light Mode')
  const [course,setCourse]=useState('Javascript')
  const handleClick = ()=>{

    setCount(count+1)
  }
  const updateName =()=>{
    setName('Kumar')
  }
  const login = ()=>{
    setStatus(true) 
  }

  const toggle=()=>{
    setTheme((prev)=>(
      prev==="light Mode"?"Dark Mode":'Light Mode'
    ))
  }
  const updateCourse = ()=>{
      setCourse('React JS')
  }
  return (
    
    <>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button>
    
    <h2>{name}</h2>
    <button onClick={updateName}>update Name</button>
    

    <h2>{status?'Welcome to User':'Please Login'}</h2>
    <button onClick={login}>Login</button>

    <h2>{theme}</h2>
    <button onClick={toggle}>Toggle Theme</button>
    
    <h2>{course}</h2>
    <button onClick={updateCourse}>update course</button>
    </>

    
    )
}

export default App