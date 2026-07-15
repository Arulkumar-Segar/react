import Home from "../pages/Home"

const Products = () => {
  
  const arr=['HTML5','CSS3','JS','React']
  const arrofobj=[
    {pName:'FS',Pprice:50000},
    {pName:'CCNA',Pprice:40000},
    {pName:'DSA',Pprice:30000},
    {pName:'DATA SCIENCE',Pprice:60000},
  ]
    return (
   <>
   <Home arrdetails={arr} arrofobjDetails={arrofobj} />
   
   </>
  )
}

export default Products