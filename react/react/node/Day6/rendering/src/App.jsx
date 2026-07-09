import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Home from "./pages/Home"


const App = () => {
  return (
   <>
   <Home></Home>

<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
</Routes>
   
   
   </>
  )
}

export default App