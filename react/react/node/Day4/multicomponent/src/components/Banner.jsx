const Banner = () => {
    return (<>
    
    
    <section class="bg-blue-600 text-white mt-2">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-2 items-center gap-10">

   
      <div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Build Better Websites
        </h1>

        <p class="text-blue-100 mb-6">
          Create beautiful and responsive websites quickly with Tailwind CSS.
        </p>

        <a href="#"
           class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </a>
      </div>

   
      <div>
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt="Banner Image"
          class="rounded-xl shadow-lg"
        ></img>
      </div>

    </div>
  </div>
</section>
    </>)
}

export default Banner