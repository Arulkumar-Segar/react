import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News1 from "./pages/News1";
import News2 from "./pages/News2";
import News3 from "./pages/News3";
import News4 from "./pages/News4";


const App = () => {

  return (

    

      <Routes>


        <Route 
          path="/" 
          element={<Home/>} 
        />


        <Route 
          path="/news1" 
          element={<News1/>} 
        />


        <Route 
          path="/news2" 
          element={<News2/>} 
        />


        <Route 
          path="/news3" 
          element={<News3/>} 
        />


        <Route 
          path="/news4" 
          element={<News4/>} 
        />


      </Routes>


    

  )

}


export default App;