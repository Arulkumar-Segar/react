import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="flex justify-between items-center bg-blue-300 p-3">

        <div>
        <h1>LoGo</h1>
        </div>
        <div className="flex justify-between items-center gap-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Projects"}>Projects</Link>

</div>
</div>
    
    
    </>
  )
}

export default NavBar