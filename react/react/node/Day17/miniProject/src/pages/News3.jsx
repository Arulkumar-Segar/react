import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";


const News3 = () => {



const news = {


id:3,


category:"Tamil Cinema Industry",



title:
"Jana Nayagan Box Office Collection: Thalapathy Vijay's final film creates massive opening worldwide",





date:
"July 2026",





author:
"CinemaPulse Editorial Team",





readTime:
"8 min read",





image:
"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",






intro:

"Thalapathy Vijay's highly anticipated final film Jana Nayagan has finally arrived in theatres, creating huge excitement among fans. The movie received a grand welcome from audiences across Tamil Nadu and recorded a strong opening day performance at the worldwide box office.",







article:[


{


heading:
"Jana Nayagan release creates a festival atmosphere",




text:

"Thalapathy Vijay's Jana Nayagan became one of the most awaited Tamil films of the year. Fans across Tamil Nadu celebrated the theatrical release with special shows, celebrations, and social media events. The film's arrival created a festival-like atmosphere among Vijay supporters."

},






{


heading:
"Vijay's final film creates emotional connection",




text:

"Jana Nayagan holds special importance because it is expected to be Vijay's final film before entering a new phase of his career. This emotional connection increased audience interest and made the movie one of the biggest releases in Tamil cinema."

},






{


heading:
"Strong worldwide opening day collection",




text:

"According to industry reports, Jana Nayagan recorded a powerful opening day performance. The film collected approximately Rs 78.27 crore worldwide on its first day, showing the strong fan base and market reach of Thalapathy Vijay."

},






{


heading:
"Certification controversy before theatrical release",




text:

"Before its release, Jana Nayagan faced discussions and controversy related to certification issues. However, these challenges increased public attention and created additional curiosity among audiences waiting for the movie."

},






{


heading:
"Massive fan celebrations across Tamil Nadu",




text:

"Fans across Chennai, Coimbatore, Madurai, and other cities celebrated the movie release with special screenings and events. The response showed Vijay's strong popularity and his long-standing connection with Tamil audiences."

},






{


heading:
"Impact on Tamil cinema industry",




text:

"Big releases like Jana Nayagan play an important role in the Tamil film industry. Successful theatrical performances support theatres, distributors, production companies, and thousands of professionals working behind cinema production."

},






{


heading:
"Vijay's journey and legacy in cinema",




text:

"Over several decades, Vijay has become one of the most influential actors in Tamil cinema. His movies have created memorable characters, delivered social messages, and developed a strong global fan community."

},






{


heading:
"Technology behind modern movie promotions",




text:

"Modern films use advanced digital marketing strategies including social media campaigns, online promotions, streaming platforms, and fan engagement technologies to reach audiences worldwide."

},






{


heading:
"Future expectations after opening success",




text:

"After a successful opening day, audiences and industry analysts are watching the movie's performance in the coming weeks. Positive audience responses and strong word-of-mouth can influence the film's long-term box office journey."

}



],







impact:[


"Digital Marketing",


"Film Technology",


"OTT Platforms",


"Social Media Promotion",


"Entertainment Analytics"


],







highlights:[


"Jana Nayagan released with huge fan celebrations",


"Thalapathy Vijay's final film created emotional excitement",


"Worldwide opening day collection reached Rs 78.27 crore",


"Tamil Nadu audiences showed massive support",


"Modern technology plays an important role in film promotions"


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



<section className="bg-gradient-to-r from-red-700 via-pink-700 to-purple-700 text-white py-20">



<div className="max-w-6xl mx-auto px-6">





<span className="bg-white/20 px-4 py-2 rounded-full text-sm">


{news.category}


</span>






<h1 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">


{news.title}


</h1>






<p className="mt-6 text-lg text-red-100 max-w-4xl">


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


alt="Jana Nayagan Movie"


className="w-full h-[420px] object-cover rounded-3xl shadow-xl"


/>






<div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-10">





<h2 className="text-3xl font-bold text-slate-800 mb-8">


Jana Nayagan: Box office success and impact on Tamil cinema


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








{/* TECHNOLOGY / INDUSTRY AREAS */}



<div className="mt-12">



<h2 className="text-3xl font-bold text-slate-800 mb-6">


Technology Impact On Modern Cinema


</h2>







<div className="grid md:grid-cols-3 gap-5">





{


news.impact.map((tech,index)=>(



<div


key={index}


className="bg-red-50 p-6 rounded-2xl hover:shadow-md transition"


>





<h4 className="text-xl font-bold text-red-700">


{tech}


</h4>





<p className="text-gray-600 mt-3">


Modern entertainment industries use these
technologies to improve audience reach,
marketing strategies, and movie experiences.


</p>






</div>



))


}




</div>



</div>










{/* KEY HIGHLIGHTS */}





<div className="mt-14 bg-gradient-to-r from-red-50 to-purple-50 rounded-3xl p-8">





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


Share your opinion about Jana Nayagan and its box office performance.


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



className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"



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



placeholder="Write your thoughts about this movie..."



className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"



></textarea>





</div>









<button




className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition"



>



Post Review



</button>








</form>










{/* REVIEW DISPLAY */}





<div className="mt-12">





<h3 className="text-2xl font-bold mb-6">


Reviews ({reviews.length})


</h3>










{


reviews.length===0 ?



(




<div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500">


No reviews yet. Be the first person to review this movie.


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



export default News3;