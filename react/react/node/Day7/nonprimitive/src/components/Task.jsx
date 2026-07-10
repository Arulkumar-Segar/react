

const Task = () => {
    
   let course="React JS"
   let price=50000
   let discount=5000
   let isLogin=true
   let  profileImage = null
   let  email=undefined
  const  arr=['vijay','ajith','surya','sk','dhanush']
  const obj={name:"Arul",Course:'FS',Exp:2}
  const students=[
    {id:1,name:'Arul',course:'FS'},
    {id:2,name:'balu',course:'FS'},
    {id:3,name:'dharan',course:'FS'},

]
    return (
    <>
    <h1>{course}</h1>
    <p>{price}</p>
    <p>{discount}</p>

    <p>{isLogin?"Welocome User":"Please Login"}</p>
    <p>{profileImage??"Image is not found"}</p>
    <p>{email??"email not available"}</p>
    <p>{getCompanyName()}</p>

    <div>
        {arr.map((e,i)=>(
            <h2 key={i}>{e}</h2>
        ))}
    </div>

    <div>
        <h3>{obj.name}</h3>
        <p>{obj.Course}</p>
        <p>{obj.Exp}</p>
    </div>


    <div key={students.id}>
        {students.map((e,i)=>(
            <div key={i}>
                <h3>{e.name}</h3>
                <p>ID:{e.id}</p>
                <p>Course:{e.course}</p>

            </div>
        ))}
    </div>
    </>
  )
}

export default Task

const getCompanyName=()=>{
    return "Google"
}