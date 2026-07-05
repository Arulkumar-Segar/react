import './form.css'

function FormStudent(){

    return(
        <>
    <h2>Student Form</h2>
    <form>
        
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name" required></input>

      <label>Email</label>
      <input type="email" placeholder="Enter your email" required></input>

      <label>Phone Number</label>
      <input type="tel" placeholder="Enter phone number" required></input>

      <label>Date of Birth</label>
      <input type="date" required></input>

      <label>Gender</label>
      <select>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Course</label>
      <input type="text" placeholder="Enter course name"></input>

      <label>Address</label>
      <textarea placeholder="Enter your address"></textarea>

      <button className="btn" type="submit">Submit</button>

    </form>

    {/* <form>
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name" required>

      <label>Email</label>
      <input type="email" placeholder="Enter your email" required>

      <label>Phone Number</label>
      <input type="tel" placeholder="Enter phone number" required>

      <label>Date of Birth</label>
      <input type="date" required>

      <label>Gender</label>
      <select>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Course</label>
      <input type="text" placeholder="Enter course name">

      <label>Address</label>
      <textarea placeholder="Enter your address"></textarea>

      <button class="btn" type="submit">Submit</button>
    </form> */}

        
        </>
    )
}

export default FormStudent;