import './table.css'

function Table(){
    return(
        <>
         <h2>Grocery Items</h2>

<table>
  <tr>
    <th>Item</th>
    <th>Category</th>
    <th>Quantity</th>
    <th>Price (₹)</th>
  </tr>

  <tr>
    <td>Rice</td>
    <td>Grains</td>
    <td>5 kg</td>
    <td>350</td>
  </tr>

  <tr>
    <td>Milk</td>
    <td>Dairy</td>
    <td>2 L</td>
    <td>120</td>
  </tr>

  <tr>
    <td>Tomatoes</td>
    <td>Vegetables</td>
    <td>1 kg</td>
    <td>40</td>
  </tr>

  <tr>
    <td>Apples</td>
    <td>Fruits</td>
    <td>1 kg</td>
    <td>180</td>
  </tr>

  <tr>
    <td>Sunflower Oil</td>
    <td>Oil</td>
    <td>1 L</td>
    <td>160</td>
  </tr>

</table>
        </>
    )
}

export default Table;