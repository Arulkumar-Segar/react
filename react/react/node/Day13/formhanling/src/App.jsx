import { useState } from "react"



const App = () => {
  const[inputText,setInputText]=useState("")
  const [saveData,setSaveData]=useState([])
const handleChange=(e)=>{
  setInputText(e.target.value)
}

const handleClick=()=>{

    const name={
      id:Date.now(),
      inputText:inputText}

  const data=[...saveData]

  data.push(name)

  setSaveData(data)
  setInputText('')

}


  return (
    <>
    <input type="text" value={inputText} placeholder="enter text" onChange={handleChange} />
    
    <button onClick={handleClick}>Add text</button>
    <h2>{inputText}</h2>
    <div>
      {saveData.map((e)=>(
      
       <div key={e.id}>
        <h2>{e.inputText}</h2>
       </div>
        
      ))}
    </div>
    
    </>
  )
}

export default App

