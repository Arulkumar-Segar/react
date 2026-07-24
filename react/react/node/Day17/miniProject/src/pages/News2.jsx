import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";


const News2 = () => {


const news = {


id:2,


category:"Indian IT Industry",



title:
"Indian IT sector sees hiring recovery as demand for software engineers and AI professionals increases",




date:
"July 2026",




author:
"TechPulse India News",




readTime:
"7 min read",




image:
"https://images.unsplash.com/photo-1521737711867-e3b97375f902",





intro:

"After several months of slower technology hiring, India's IT sector is showing signs of recovery. Companies are increasing recruitment activities as demand rises for software engineers, artificial intelligence specialists, cloud professionals, and digital technology experts.",





article:[


{


heading:
"Indian IT hiring market begins recovery",



text:

"India's technology industry is experiencing positive changes after a period of cautious hiring. Many companies that previously reduced recruitment plans are now reopening positions as business demand improves across software services, cloud computing, artificial intelligence, and digital transformation projects."

},




{


heading:
"Why did IT hiring slow down earlier?",



text:

"During the previous period, global economic uncertainty, reduced technology spending, and changes in business priorities affected hiring decisions. Several companies focused on improving productivity and restructuring existing teams before expanding their workforce again."

},




{


heading:
"Software engineers are seeing renewed demand",



text:

"The demand for skilled software developers is increasing as businesses continue to build new applications and modernize their digital platforms. Full stack developers, backend engineers, frontend developers, and mobile application developers are becoming important roles in technology companies."

},




{


heading:
"AI professionals become highly valuable",



text:

"Artificial Intelligence has created new opportunities in India's technology sector. Companies are searching for professionals who understand machine learning, generative AI, data analytics, automation tools, and AI-based software development."

},




{


heading:
"Growth of technology opportunities in Tamil Nadu",



text:

"Tamil Nadu continues to be one of India's important technology hubs. Chennai, Coimbatore, Madurai, and other cities are seeing increased technology activities with companies investing in software development, IT services, and digital solutions."

},




{


heading:
"Chennai IT corridor drives employment growth",



text:

"Chennai's IT corridor including areas like OMR, Guindy, Taramani, and Siruseri continues to attract technology companies. The growth of IT parks and software companies creates more opportunities for fresh graduates and experienced professionals."

},




{


heading:
"Impact on fresh graduates and job seekers",



text:

"The recovery in hiring provides better opportunities for students entering the technology industry. However, companies are focusing more on practical skills rather than only academic qualifications. Programming knowledge, projects, communication skills, and technology awareness are becoming important."

},




{


heading:
"Future skills required for IT careers",



text:

"Technology professionals need to continuously improve their skills. Knowledge of artificial intelligence, cloud platforms, cybersecurity, full stack development, data engineering, and automation can help candidates build successful careers."

},



{


heading:
"Technology companies are preparing for future growth",



text:

"With increasing digital adoption, organizations are preparing for long-term technology growth. Companies are expected to continue hiring professionals who can support innovation and develop modern digital products."

}


],







impact:[


"Artificial Intelligence",


"Full Stack Development",


"Cloud Computing",


"Data Engineering",


"Cybersecurity"


],






highlights:[


"IT hiring demand is showing recovery",


"Software engineer openings are increasing",


"AI skills are becoming highly valuable",


"Tamil Nadu continues growing as an IT hub",


"Fresh graduates need practical technology skills"


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


const updatedReviews=reviews.filter(

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



<section className="bg-gradient-to-r from-green-700 via-teal-700 to-blue-700 text-white py-20">


<div className="max-w-6xl mx-auto px-6">



<span className="bg-white/20 px-4 py-2 rounded-full text-sm">


{news.category}


</span>





<h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">


{news.title}


</h1>





<p className="mt-6 text-lg text-green-100 max-w-4xl">


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


alt="Indian IT Industry"


className="w-full h-[420px] object-cover rounded-3xl shadow-xl"


/>





<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-10">



<h2 className="text-3xl font-bold text-slate-800 mb-8">


Indian IT hiring recovery and future career opportunities


</h2>




{
news.article.slice(0,4).map((item,index)=>(


<div

key={index}

className="mb-10"

>


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


<div

key={index}

className="mb-10"

>


<h3 className="text-2xl font-bold text-slate-800 mb-4">


{item.heading}


</h3>




<p className="text-gray-600 leading-8">


{item.text}


</p>



</div>


))
}






{/* TECHNOLOGY AREAS */}



<div className="mt-12">



<h2 className="text-3xl font-bold text-slate-800 mb-6">


Skills Driving IT Hiring Growth


</h2>





<div className="grid md:grid-cols-3 gap-5">



{

news.impact.map((tech,index)=>(



<div


key={index}


className="bg-green-50 p-6 rounded-2xl hover:shadow-md transition"


>



<h4 className="text-xl font-bold text-green-700">


{tech}


</h4>




<p className="text-gray-600 mt-3">


Professionals with expertise in this technology
are getting better career opportunities as Indian
companies increase their digital investments.


</p>




</div>



))


}



</div>



</div>








{/* KEY HIGHLIGHTS */}



<div className="mt-14 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">



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


Share your opinion about Indian IT hiring recovery and technology trends.


</p>









{/* REVIEW FORM */}





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



className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"



/>



</div>









{/* RATING */}



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









{/* COMMENT */}



<div>



<label className="font-semibold text-gray-700">


Write Review


</label>





<textarea


rows="5"



value={comment}



onChange={(e)=>setComment(e.target.value)}



placeholder="Write your thoughts about this news..."



className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"



></textarea>



</div>









<button



className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"



>


Post Review


</button>







</form>













{/* DISPLAY REVIEWS */}





<div className="mt-12">





<h3 className="text-2xl font-bold mb-6">


Reviews ({reviews.length})


</h3>








{


reviews.length===0 ?



(



<div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500">


No reviews yet. Be the first person to review this article.


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



export default News2;