// TestimonialsPage.jsx
export function TestimonialsPage() {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO of Example Corp",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      quote:
        "Steven Slavitt is an exceptional lawyer. He helped us navigate complex legal issues with ease and professionalism. His expertise and dedication are unparalleled.",
    },
    {
      name: "Jane Smith",
      position: "Founder of StartUp Inc.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      quote:
        "I highly recommend Steven for anyone in need of legal assistance. His understanding of the law and commitment to justice are truly impressive. He made a difficult time much easier for us.",
    },
    {
      name: "Robert Johnson",
      position: "Manager at Legal Solutions",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      quote:
        "Steven's attention to detail and his ability to explain complex legal jargon in simple terms was invaluable to our case. I would definitely work with him again.",
    },
  ];

  return (
    <main className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Testimonials</h1>
          <p className="mt-4 text-lg text-gray-600">
            Hear what our clients have to say about working with Steven Slavitt.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">{testimonial.name}</h2>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
