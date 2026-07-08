import NavBar from "./Components/NavBar"
import {Link,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Project from "./Components/Project"


const App= ()=>{
  return(<>

    <Home/>
    
  <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/project" element={<Project/>}></Route>
  </Routes>
  
  </>)
}

export default App