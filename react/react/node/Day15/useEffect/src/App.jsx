import { useState } from "react"
import { useEffect } from "react"


const App = () => {

const [count,setCount]=useState(0)
const [name,setName]=useState("")

const handlechange=(e)=>{
  setName(e.target.value)


}


useEffect(()=>{
  
console.log("Current count:",count);
document.title=name?`Welcome ${name}`:"Welcome"
},[count,name])

return (
<>
{/* task1 */}
<div>
  <h2>Count:{count}</h2>
  <button onClick={()=>setCount(count+1)}>Increament to Count</button>
</div>


{/* Task2 */}

<div>
  <h2>Enter a Name</h2>
  <input onChange={handlechange} type="text" placeholder="Enter a name" />
</div>
</>
  )
}

export default App