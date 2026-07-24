import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";


const News1 = () => {


const news = {


id:1,


category:"Artificial Intelligence",


title:
"AI-driven tech layoffs continue worldwide as technology companies restructure for the future",



date:
"July 2026",



author:
"TechPulse Editorial Team",



readTime:
"8 min read",



image:
"https://images.unsplash.com/photo-1550751827-4bd374c3f58b",




intro:

"Artificial Intelligence has become one of the biggest forces transforming the global technology industry. As companies increase their investment in AI-powered systems, automation platforms, and intelligent solutions, many organizations are redesigning their workforce strategies.",




article:[


{

heading:
"Artificial Intelligence is changing the technology industry",


text:

"Artificial Intelligence has moved from being an experimental technology to becoming a major business priority. Companies across different industries are adopting AI tools to improve productivity, automate repetitive tasks, analyze large amounts of data, and create better digital experiences for customers."

},



{


heading:
"Why are technology companies restructuring their workforce?",


text:

"Many global technology organizations expanded their workforce rapidly during the digital transformation period. However, changing market conditions, economic uncertainty, and increased adoption of automation have encouraged companies to review their current team structures."

},



{


heading:
"The role of AI in modern workplaces",


text:

"AI technologies are now supporting employees in various areas including software development, testing, customer support, marketing analysis, and business operations. Tools powered by artificial intelligence can complete repetitive tasks faster and allow employees to focus on higher-value activities."

},



{


heading:
"Impact on technology employees worldwide",


text:

"The growth of AI has created uncertainty among some technology professionals because certain traditional roles are changing. Employees working in repetitive or routine tasks may need to upgrade their skills to stay competitive in the changing job market."

},



{


heading:
"Companies are focusing on AI-ready employees",


text:

"Instead of only reducing workforce numbers, many companies are shifting their focus toward hiring professionals who understand emerging technologies. Skills related to artificial intelligence, machine learning, cloud computing, cybersecurity, and data engineering are becoming increasingly valuable."

},



{


heading:
"How AI is affecting India's IT industry",


text:

"India is one of the world's largest technology service markets, and changes in global technology trends directly influence Indian IT companies. Organizations are becoming more selective in hiring and are focusing on employees who can work with modern technologies."

},



{


heading:
"Changing opportunities for fresh graduates",


text:

"For students and fresh graduates, AI transformation creates both challenges and opportunities. Basic programming knowledge alone may not be enough in the future. Understanding AI tools, problem solving, software architecture, and new technology trends can provide better career opportunities."

}


],






impact:[


"Artificial Intelligence",

"Cloud Computing",

"Machine Learning",

"Data Engineering",

"Cybersecurity"


],





highlights:[


"Companies are increasing investment in AI technologies",


"Traditional technology roles are evolving",


"Employees need continuous skill development",


"AI knowledge is becoming important for IT careers",


"Human and AI collaboration will shape future workplaces"


]


};






// Local Storage Key


const storageKey = `newsReviews-${news.id}`;




const [name,setName] = useState("");

const [comment,setComment] = useState("");

const [rating,setRating] = useState(0);

const [reviews,setReviews] = useState([]);






// Load Reviews



useEffect(()=>{


const storedReviews = localStorage.getItem(storageKey);



if(storedReviews){


setReviews(JSON.parse(storedReviews));


}



},[]);







// Add Review



const submitReview=(e)=>{


e.preventDefault();



if(
!name ||
!comment ||
rating===0
){


alert("Please complete all fields");


return;


}




const newReview={


id:Date.now(),


name:name,


comment:comment,


rating:rating,


date:new Date().toLocaleString()



};





const updatedReviews=[

newReview,

...reviews

];



setReviews(updatedReviews);



localStorage.setItem(

storageKey,

JSON.stringify(updatedReviews)

);




setName("");

setComment("");

setRating(0);



};








// Delete Review



const deleteReview=(id)=>{


const updatedReviews = reviews.filter(

(review)=>review.id!==id

);



setReviews(updatedReviews);



localStorage.setItem(

storageKey,

JSON.stringify(updatedReviews)

);



};







return (


<div className="min-h-screen bg-slate-50">



{/* HERO SECTION */}


<section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-20">


<div className="max-w-6xl mx-auto px-6">



<span className="bg-white/20 px-4 py-2 rounded-full text-sm">

{news.category}

</span>





<h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">


{news.title}


</h1>





<p className="mt-6 text-lg text-blue-100 max-w-4xl">


{news.intro}


</p>





<div className="flex flex-wrap gap-6 mt-8 text-sm">


<p>
📅 {news.date}
</p>


<p>
👤 {news.author}
</p>


<p>
⏱ {news.readTime}
</p>


</div>



</div>


</section>






{/* ARTICLE AREA */}



<section className="max-w-5xl mx-auto px-6 py-14">



<img

src={news.image}

alt="AI Technology"

className="w-full h-[420px] object-cover rounded-3xl shadow-xl"

/>





<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-10">


<h2 className="text-3xl font-bold text-slate-800 mb-8">


AI transformation and the future of technology jobs


</h2>



{
news.article.slice(0,4).map((item,index)=>(


<div key={index} className="mb-10">


<h3 className="text-2xl font-bold text-slate-800 mb-4">


{item.heading}


</h3>



<p className="text-gray-600 leading-8">


{item.text}


</p>



</div>



))
}


        {
        news.article.slice(4).map((item,index)=>(


        <div key={index} className="mb-10">


            <h3 className="text-2xl font-bold text-slate-800 mb-4">

                {item.heading}

            </h3>



            <p className="text-gray-600 leading-8">

                {item.text}

            </p>



        </div>



        ))
        }





        {/* Technology Areas */}


        <div className="mt-12">


            <h2 className="text-3xl font-bold text-slate-800 mb-6">

                Technologies Driving The Future

            </h2>



            <div className="grid md:grid-cols-3 gap-5">


            {
                news.impact.map((tech,index)=>(


                <div

                key={index}

                className="bg-blue-50 p-6 rounded-2xl hover:shadow-md transition"

                >


                    <h4 className="text-xl font-bold text-blue-700">

                        {tech}

                    </h4>


                    <p className="text-gray-600 mt-3">


                        Professionals with knowledge in this area
                        can find better opportunities in the evolving
                        technology industry.


                    </p>



                </div>


                ))
            }



            </div>


        </div>








        {/* Key Highlights */}



        <div className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">


            <h2 className="text-3xl font-bold text-slate-800 mb-6">


                Key Highlights


            </h2>




            <ul className="space-y-4">


            {

            news.highlights.map((point,index)=>(


                <li

                key={index}

                className="flex gap-3 text-gray-700"


                >

                    <span>

                    ✅

                    </span>


                    {point}


                </li>



            ))

            }


            </ul>


        </div>





        </div>






        {/* REVIEW SECTION */}



        <section className="mt-14 bg-white rounded-3xl shadow-xl p-8 md:p-12">



            <h2 className="text-3xl font-bold text-slate-800">


                Community Reviews 💬


            </h2>



            <p className="text-gray-500 mt-2">


                Share your thoughts about this technology news.


            </p>







            {/* Review Form */}



            <form

            onSubmit={submitReview}

            className="mt-8 space-y-6"


            >





            <div>


                <label className="font-semibold text-gray-700">


                    Your Name


                </label>



                <input


                type="text"

                value={name}

                onChange={(e)=>setName(e.target.value)}

                placeholder="Enter your name"


                className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"


                />


            </div>







            {/* Rating */}



            <div>


                <label className="font-semibold text-gray-700">


                    Your Rating


                </label>



                <div className="flex gap-3 mt-3">


                {

                [1,2,3,4,5].map((star)=>(



                    <FaStar


                    key={star}


                    onClick={()=>setRating(star)}


                    className={`text-3xl cursor-pointer transition

                    ${

                    star <= rating

                    ?

                    "text-yellow-400"

                    :

                    "text-gray-300"

                    }

                    `}


                    />



                ))

                }



                </div>



            </div>







            {/* Comment */}



            <div>


                <label className="font-semibold text-gray-700">


                    Write Review


                </label>



                <textarea


                rows="5"

                value={comment}

                onChange={(e)=>setComment(e.target.value)}

                placeholder="Write your opinion about this news..."


                className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"


                ></textarea>


            </div>







            <button


            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"


            >


                Post Review


            </button>




            </form>












            {/* Reviews Display */}




            <div className="mt-12">


                <h3 className="text-2xl font-bold mb-6">


                    Reviews ({reviews.length})


                </h3>





                {

                reviews.length===0 ?



                (


                <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500">


                    No reviews yet. Be the first person to review.


                </div>


                )



                :



                (


                <div className="space-y-5">


                {

                reviews.map((review)=>(



                    <div

                    key={review.id}

                    className="border rounded-2xl p-6 hover:shadow-md transition"


                    >




                    <div className="flex justify-between">


                        <div>


                            <h4 className="font-bold text-lg">


                                {review.name}


                            </h4>



                            <p className="text-sm text-gray-400">


                                {review.date}


                            </p>



                        </div>






                        <button


                        onClick={()=>deleteReview(review.id)}


                        className="text-red-500 hover:text-red-700"


                        >


                            <FaTrash/>


                        </button>




                    </div>








                    <div className="flex mt-4">


                    {

                    [1,2,3,4,5].map((star)=>(


                        <FaStar


                        key={star}


                        className={

                        star <= review.rating

                        ?

                        "text-yellow-400"

                        :

                        "text-gray-300"

                        }


                        />


                    ))


                    }


                    </div>







                    <p className="mt-4 text-gray-600">


                        {review.comment}


                    </p>




                    </div>



                ))

                }



                </div>


                )


                }



            </div>





        </section>





    </section>





</div>


)


}


export default News1;