import { useState } from "react"


const App = () => {
  
  const [arr,setArr]=useState(['Ajith','vijay','SK'])
  const [fruit,setFruit]=useState(['Apple','Orange','Mango'])
  const [objcourse,setObjcourse]=useState({name:'sudhan',course:'JS'})
  const [company,setCompany]=useState({company:'Google',city:'chennai'})

  const [students,setStudents]=[
    {id:1,name:'AK'},
    {id:2,name:'BK'}
  ]
  const [obj,setObj]=useState({name:'React',color:'blue',price:1000})
  const handleClick=(()=>{
    const updateName=[...arr]
    updateName[1]='Surya'
    setArr(updateName)
  }
  )
  const updateFruit=()=>{
      const updata = [...fruit]
      updata[1]='Banana'
      setFruit(updata)
  }

  const updateCourse =()=>{

    setObjcourse({...objcourse,course:'React'})
  }


  const updateCompany = ()=>{

    setCompany({...company,company:"Microsoft"})

  }


  const updateStudent=()=>{
    const studentupdate=students.map(()=>{
      students.id ===2?{...students,name:vijay}:students;
    })
  setStudents(studentupdate)
  }

 
  return (
    <>
    <div>
      <h2>{arr.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}</h2>
      <button onClick={handleClick}>Click to add arr</button>
    </div>

        <div>
          <h2>{fruit.map((e,i)=>(
            <p key={i+1}>{e}</p>
          ))}</h2>
          <button onClick={updateFruit}>update Fruit</button>
        </div>

        <div>
              <h2>{objcourse.name}</h2>
              <h2>{objcourse.course}</h2>
              <button onClick={updateCourse}>Click to update Course</button>
        </div>
        <div>
              <h2>{objcourse.name}</h2>
              <h2>{objcourse.course}</h2>
              <button onClick={updateCompany}>Click to update Company</button>
        </div>


        <div>
              <h2>{students.id}</h2>
              <h2>{students.name}</h2>
              <button onClick={updateStudent}>Click to update student</button>
        </div>


    <div>
      <h2>{obj.name}</h2>
      <button onClick={handleClick}>Click to add arr</button>
    </div>


  

    </>
  )
}

export default App