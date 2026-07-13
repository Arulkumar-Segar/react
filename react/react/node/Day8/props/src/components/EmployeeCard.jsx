
export const EmployeeCard = ({datas}) => {
 
   
    return (
    <>
    <p>Name:{datas.Name}</p>
    <p>Email:{datas.Email}</p>
    <p>City:{datas.City}</p>
    <p>Experience:{datas.Exp}Years</p>
    </>
  )
}

export default EmployeeCard
