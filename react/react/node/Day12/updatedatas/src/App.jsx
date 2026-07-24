import { useState } from "react"


const App = () => {

  const [student,setStudent]=useState({
    name:'course',
    course:'react'
  })
  const [product,setProduct]=useState({
    product:'Mobile',
    price:20000
  })
  const [arr,setArr]=useState(['vijay','ajith','surya'])
  
  const updatecourse=()=>{
    setStudent({...student,course:'MERN'})
  }
  const updateProduct=()=>{
    setProduct({...product,price:25000})
  }

  const updateArr=()=>{
    const updateArr = [...arr]
    updateArr[1]="SK"
    setArr(updateArr)
  }

  return (

    <>
    
    <div>
    <h2>Name:{student.name}</h2>
    <h2>Course:{student.course}</h2>
    <button onClick={updatecourse}>update course</button>
    </div>
    <div>
      {/* task2 */}
    <h2>Product:{product.product}</h2>
    <h2>Price:{product.price}</h2>
    <button onClick={updateProduct}>update product</button>
    </div>
    
    <div>
      <h2>Actors</h2>
      {arr.map((e,i)=>(
      
       <div key={i}>
       <p>{e}</p>
       </div>
      
      ))}
    </div>
    <button onClick={updateArr}>Click update</button>
    </>

    )
}

export default App