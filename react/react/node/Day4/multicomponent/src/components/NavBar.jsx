import Link from "./Link"

const NavBar =()=>{
    return(<>
    
    <div className="flex justify-between p-5 bg-blue-400">
        <div>
            <p className="bg-blue-400" >Logo</p>
        </div>
        <div>
            <Link/>
        </div>
    </div>
    
    </>)
}

export default NavBar


const logo = ()=>{
return(<>
<img src="" alt="" />
</>)
}