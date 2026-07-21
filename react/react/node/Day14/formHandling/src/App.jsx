import { useEffect } from 'react';
import { useState } from 'react'


const App = () => {

//   const[data,setData]= useState("")
//   const[saveData,setSaveData]= useState([])

//   const handlechange=(e)=>{
//     // console.log(e.target.value);
//   setData(e.target.value)
  
//   }
// const handleadd=(e)=>{
//   e.preventDefault()
//   const newdatas={
//     id:Date.now(),
//     data:data
//   }

//   const datas=[...saveData]

//   datas.push(newdatas)

//   setSaveData(data)

const takeData = async()=>{
  console.log('Fetch funtion running');
  const getData= await fetch("https://dummyjson.com/products")
  const changeData = await getData.json()

}

useEffect(()=>{
  
})

}

  return (
    <>
    {/* <form>
      <input type="text" value={data} placeholder='Enter text' onChange={handlechange} />
      <input type="submit" value="add" onClick={handleadd} />
      <div>
      {}
      </div>
    </form>  */}
    
    </>
    
  )
}

export default App