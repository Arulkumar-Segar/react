import {Link }from 'react-router-dom'

const NavBar = ()=>{

    return(<>
    <div className='flex justify-between items-center bg-blue-300'>
        <div className="flex p-3">
            <h1>Logo</h1>
        </div>
        <div className='flex justify-between gap-5'>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/project" >Project</Link>
            <Link to="contact">Contact</Link>
        </div>
    </div>
    
    </>)


}

export default NavBar;
