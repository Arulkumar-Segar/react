import Events from "../components/Events"
import NavBar from "../components/NavBar"


const Home = () => {

  const student={
    name:'ak',
    age:15,
    course:'react'
  }
  return (
   <>
   <NavBar/>
    <Events name={student.name} age={student.age} course={student.course} />
   </>
  )
}

export default Home