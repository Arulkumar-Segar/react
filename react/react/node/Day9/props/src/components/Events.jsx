import { useState } from "react"

const Events = (props) => {

    const[name,age,course]=props
    
const[count,setCount]=useState(0)
const Update=()=>{
    setCount(count+1)
}
    
const ClickoN=()=>{
    alert("Button Clicked");       
   }
   
  return (
   <>

        <div>
            <h2>Student Page</h2>
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>course:{props.course}</p>
        </div>










   
   <button className="btn bg-amber-100 p-2 rounded-2xl pointer-focus" onClick={ClickoN}>
    ClickMe
   </button>
   


   <p>{count}</p>

   <button onClick={Update} className="btn bg-green-300 focus-ring-blue-500 focus-ring-2 cursor-pointer rounded-2xl p-2">
    Click On Update
   </button>
   </>
  )
}

export default Events