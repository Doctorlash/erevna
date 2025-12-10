const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Founder</h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col items-center">
            <img 
              src="public/founder.jpg" 
              alt="Emmanuel O. Thomas" 
              className="w-60 h-100 rounded-full object-cover shadow-lg border-4 border-white mb-8 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8 max-w-2xl">
              As the founder of Erevna Leadership Academy, Emmanuel O. Thomas brings years of experience coaching leaders from classrooms to boardrooms. With a deep belief in intentional leadership development, he has crafted this academy to nurture leaders who lead with integrity, empathy, and purpose.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Emmanuel O. Thomas</h3>
            <p className="text-lg text-blue-600 font-medium">Founder and Lead Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
