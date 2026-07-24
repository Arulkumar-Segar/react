import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";


const News4 = () => {



const news = {


id:4,


category:"Tamil Nadu Education News",



title:
"Protests over NEET continue in Tamil Nadu as leaders demand changes in medical admission process",





date:
"July 2026",





author:
"Tamil Nadu Education Desk",





readTime:
"8 min read",





image:
"https://images.unsplash.com/photo-1509062522246-3755977927d7",






intro:

"Protests against the National Eligibility cum Entrance Test (NEET) continue in Tamil Nadu as political leaders, students, and education activists raise concerns about the impact of the examination system on medical admissions. The issue remains one of the most discussed topics in Tamil Nadu education and politics.",







article:[



{


heading:
"NEET controversy continues in Tamil Nadu",



text:

"The NEET examination has remained a major topic of discussion in Tamil Nadu for several years. Students, parents, and political organizations have expressed different opinions regarding the examination system and its impact on medical education opportunities."

},




{


heading:
"Political leaders demand changes in admission process",



text:

"Several political leaders in Tamil Nadu have renewed their criticism of the NEET examination and have demanded changes in the medical admission process. They argue that the current system creates challenges for students from different educational backgrounds."

},




{


heading:
"Students and parents raise concerns",



text:

"Many students and parents have shared concerns about preparation requirements, coaching expenses, and the pressure associated with competitive examinations. The discussion has increased awareness about equal access to medical education."

},




{


heading:
"Impact on rural students in Tamil Nadu",



text:

"One of the major concerns raised during the NEET discussion is the effect on students from rural areas. Many believe that students from villages may face additional challenges due to differences in resources, coaching facilities, and learning opportunities."

},




{


heading:
"Tamil Nadu's stand on medical education",



text:

"Tamil Nadu has historically focused on expanding medical education opportunities through government colleges and reservation policies. The NEET issue has become an important part of discussions about maintaining accessibility in healthcare education."

},




{


heading:
"Students continue awareness campaigns",



text:

"Student organizations and education groups continue conducting awareness programs and discussions about the examination system. These activities aim to highlight student concerns and encourage improvements in the admission process."

},




{


heading:
"Role of government in education policies",



text:

"Government decisions play an important role in shaping education systems. Policy changes, student support programs, and improved learning facilities can influence the future of medical education in Tamil Nadu."

},




{


heading:
"Future of medical admissions in India",



text:

"The discussion around NEET reflects larger questions about entrance examinations, fairness, and accessibility in higher education. Future education policies may focus on balancing standardization with equal opportunities for students."

},




{


heading:
"Technology and education transformation",



text:

"Digital learning platforms, online resources, and educational technology are changing how students prepare for competitive examinations. These tools are helping students access learning materials from different locations."

}



],







impact:[


"Online Education",


"Digital Learning Platforms",


"Education Technology",


"Student Support Systems",


"Career Guidance"

],







highlights:[


"NEET remains a major education issue in Tamil Nadu",


"Political leaders continue demanding admission process changes",


"Students and parents discuss challenges of competitive exams",


"Equal access to medical education remains a key concern",


"Technology is changing competitive exam preparation"


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



<section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white py-20">



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


alt="NEET Education News"


className="w-full h-[420px] object-cover rounded-3xl shadow-xl"


/>









<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-10">







<h2 className="text-3xl font-bold text-slate-800 mb-8">


NEET controversy and the future of education in Tamil Nadu


</h2>








{

news.article.map((item,index)=>(



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









{/* EDUCATION AREAS */}




<div className="mt-12">





<h2 className="text-3xl font-bold text-slate-800 mb-6">


Education Technology Impact


</h2>








<div className="grid md:grid-cols-3 gap-5">





{


news.impact.map((tech,index)=>(




<div


key={index}


className="bg-indigo-50 p-6 rounded-2xl hover:shadow-md transition"


>







<h4 className="text-xl font-bold text-indigo-700">


{tech}


</h4>







<p className="text-gray-600 mt-3">


Modern education systems use these
technologies to improve learning,
exam preparation, and student guidance.


</p>






</div>





))


}





</div>






</div>













{/* KEY HIGHLIGHTS */}





<div className="mt-14 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8">





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


Share your opinion about NEET and education reforms in Tamil Nadu.


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




className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"




/>







</div>













{/* STAR RATING */}







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



placeholder="Write your thoughts about this education topic..."




className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"




></textarea>








</div>













<button





className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition"





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



No reviews yet. Be the first person to review this topic.



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


export default News4;