import { Link } from "react-router-dom"


const NavBar = () => {
  return (
   <>
   <div className="flex justify-between items-center p-4 bg-blue-600">
    <h2>LOGO</h2>

    <div>
        <Link to={'/'}>Cards</Link>
        <Link to={'/banner'}>Products</Link>
    </div>

   </div>
   
   </>
  )
}

export default NavBar