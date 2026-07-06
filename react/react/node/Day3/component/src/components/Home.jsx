import profileImg from '../assets/Arul.png'



// const teamMembers = [
//     {
//       id: 1,
//       name: "John Doe",
//       designation: "Frontend Developer",
//       image: "/member1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       designation: "UI/UX Designer",
//       image: "/member2.jpg",
//     },
//     {
//       id: 3,
//       name: "David Lee",
//       designation: "Backend Developer",
//       image: "/member3.jpg",
//     },
//     {
//       id: 4,
//       name: "Emily Brown",
//       designation: "Project Manager",
//       image: "/member4.jpg",
//     },
//   ];
const Home = ()=>{
    return (
        <>
        
        <div className="flexbox">
            <h1>MyPage</h1>
            <div className="navbar">
               <a href="">Home</a>
               <a href="">Main</a>
               <a href="">Contact</a>
               <a href="">About</a>
            </div>
            </div>

            
     <div className="card">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <h2>Arul</h2>
      <p>Frontend Developer</p>
    </div>
    

    <div className="hero">
      <img src="/hero.png" alt="Hero Banner" className="hero-image" />

      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <button>Get Started</button>
      </div>
    </div>


    <div className="gallery">
      <img src="/Product 1.jpg" alt="Product 1" />
      <img src="/Product 2.jpg" alt="Product 2" />
      <img src="/Product 3.jpg" alt="Product 3" />
      <img src="/Product 4.jpeg" alt="Product 4" />
    </div>


        </>
    )
}

export default Home