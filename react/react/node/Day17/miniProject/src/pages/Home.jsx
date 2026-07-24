import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = {
    name: "Halima",
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto h-20 px-10 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <h1 className="text-4xl font-bold">NewTn</h1>
              <p className="text-xs text-gray-500">
                From The Economic Times
              </p>
            </div>
          </div>


          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-12 text-lg">

            <li className="h-20 flex items-center border-b-2 border-red-600 text-red-600 cursor-pointer">
              News
            </li>

            <li className="hover:text-red-600 cursor-pointer">
              India
            </li>

            <li className="hover:text-red-600 cursor-pointer">
              World
            </li>

            <li className="hover:text-red-600 cursor-pointer">
              Events
            </li>

            <li className="hover:text-red-600 cursor-pointer">
              Awards
            </li>

            <li className="hover:text-red-600 cursor-pointer">
              Movies
            </li>

          </ul>


          {/* Right */}
          <div className="flex items-center gap-4">

            <button 
            className="border border-red-400 rounded-full px-6 py-2 text-base hover:bg-red-400 hover:text-white transition">
              Sign Up
            </button>


            <button  
            className="border border-gray-400 rounded-full px-6 py-2 text-base hover:bg-gray-400 hover:text-white transition">
              Login
            </button>

          </div>

        </div>
      </nav>



      {/* ================= NEWS CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-20 bg-slate-100 min-h-screen">


        {/* Card 1 */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <img
            src="./tech1.jpg"
            alt="AI Tech"
            className="w-full h-52 object-cover"
          />


          <div className="p-5">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Technology
            </span>


            <h2 className="text-xl font-bold mt-3">
              AI-driven Tech Layoffs Continue Worldwide
            </h2>


            <p className="text-gray-600 mt-2">
              Global technology companies continue restructuring while investing heavily in AI.
            </p>



            <Link to="/news1">

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Read More →
              </button>

            </Link>


          </div>

        </div>





        {/* Card 2 */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <img
            src="./image.jpg"
            alt="IT Jobs"
            className="w-full h-52 object-cover"
          />


          <div className="p-5">


            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Technology
            </span>


            <h2 className="text-xl font-bold mt-3">
              Indian IT Sector Sees Hiring Recovery
            </h2>


            <p className="text-gray-600 mt-2">
              Hiring in India's IT industry is improving with increased demand for AI engineers.
            </p>


            <Link to="/news2">

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Read More →
              </button>

            </Link>


          </div>

        </div>





        {/* Card 3 */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <img
            src="./image.png"
            alt="Movie"
            className="w-full h-52 object-cover"
          />


          <div className="p-5">

            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              Tamil Nadu
            </span>


            <h2 className="text-xl font-bold mt-3">
              Jana Nayagan Box Office Collection
            </h2>


            <p className="text-gray-600 mt-2">
              Vijay's final film opened with a massive worldwide collection on its first day.
            </p>


            <Link to="/news3">

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Read More →
              </button>

            </Link>


          </div>

        </div>        {/* Card 4 */}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

          <img
            src="./tn2.jpeg"
            alt="NEET"
            className="w-full h-52 object-cover"
          />


          <div className="p-5">


            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              India
            </span>


            <h2 className="text-xl font-bold mt-3">
              NEET Protests Continue
            </h2>


            <p className="text-gray-600 mt-2">
              Political leaders continue opposing NEET and demand changes in the admission process.
            </p>



            <Link to="/news4">

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Read More →
              </button>

            </Link>


          </div>

        </div>


      </div>





      {/* ================= FOOTER ================= */}


      <footer className="bg-slate-900 text-white px-10 py-12">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">


          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              NewTn
            </h2>


            <p className="text-gray-400 mt-3 leading-7">

              From The Economic Times.
              Bringing latest technology,
              cinema, education and Tamil Nadu
              news updates.

            </p>


          </div>





          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Technology
              </li>


              <li className="hover:text-white cursor-pointer">
                India News
              </li>


              <li className="hover:text-white cursor-pointer">
                Tamil Nadu
              </li>


              <li className="hover:text-white cursor-pointer">
                Movies
              </li>


            </ul>


          </div>






          {/* Quick Links */}

          <div>


            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>


            <ul className="space-y-3 text-gray-400">


              <li className="hover:text-white cursor-pointer">
                Home
              </li>


              <li className="hover:text-white cursor-pointer">
                About Us
              </li>


              <li className="hover:text-white cursor-pointer">
                Contact
              </li>


              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>


            </ul>


          </div>







          {/* Contact */}

          <div>


            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>


            <p className="text-gray-400">
              Email:
              news@newtn.com
            </p>


            <p className="text-gray-400 mt-3">
              Chennai, Tamil Nadu
            </p>



            <div className="flex gap-4 mt-5">


              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                Facebook
              </button>


              <button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700">
                Instagram
              </button>


            </div>



          </div>



        </div>






        {/* Bottom Footer */}


        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">


          © 2026 NewTn. All Rights Reserved.


        </div>



      </footer>



    </>
  );
};


export default Home;