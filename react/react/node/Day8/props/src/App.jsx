import EmployeeCard from "./components/EmployeeCard"
import StudentCard from "./components/StudentCard"
import StudentList from "./components/StudentList"


const App = () => {

  const arr=[
    {id:1,name:"Arul",course:'FS'},
    {id:2,name:"balu",course:'FS'},
    {id:3,name:"carl",course:'FS'},
    {id:4,name:"darren",course:'FS'},
    {id:5,name:"eni",course:'FS'},
  ]

  const obj ={
    Name:'Rahul',
    Email:'rahul@gmail.com',
    City:'Chennai',
    Exp:3
  }
  return (
   <>
   <StudentList list={arr}/>
   <EmployeeCard datas={obj}/>
    <div>

      <StudentCard
        name="Sudhan"
        age={25}
        course="React"
        isPlaced={true}
   />
    </div>


   </>
  )
}

export default App