const  StudentCard = ({ name, age, course, isPlaced })=> {
  return (
    <div>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>Course : {course}</h3>
      <h3>Status : {isPlaced ? "Placed" : "Not Placed"}</h3>
    </div>
  );
}

export default StudentCard;