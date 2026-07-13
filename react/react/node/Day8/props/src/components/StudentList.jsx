

const StudentList = (p) => {
    
    const {list}=p
 
    return (
   <>
  
   {list.map((e,i)=>(
        <>
        <p key={i}>{e.id} - {e.name} - {e.course}</p></>
    ))}
    
  
    
   </>
  )
}

export default StudentList