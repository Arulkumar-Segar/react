import Task from "./components/Task"

const App = () => {
  const arr=['one','two','three',4,5,6,7,8]
  const obj = {name:"Arul",id:001}

  const arrObj=[{name:'Arul',id:001},{name:'balu',id:002},{name:'carolin',id:003}]
  return (
    <>
    <h1>TASK</h1>

    <Task></Task>

    <h1>TASK2</h1>
    <p>{arr}</p>
    {arr.map((e,i)=>(
    <h1 key={i}>{e}</h1>  
    ))}

    <h2>object Rendering</h2>
    <h3>{obj.name}</h3>
    <h3>{obj.id}</h3>

      <div>
        <h1>Array of Object</h1>
        
        {arrObj.map((e,i)=>(
        
        <div key={e.id} className="">
          <h1>{e.name}</h1>
          <h1>{e.id}</h1>

        </div>
        ))}
        
      
      </div>

    
    </>
  )
}

export default App