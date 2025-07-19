import axios from "axios";
import { useState, useEffect } from "react";

export function HomePage() {
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    // Fetch any additional lawyer data if needed
    axios.get("http://localhost:3000/lawyers/1.json").then((response) => {
      setLawyer(response.data);
    });
  }, []);

  return (
    <main className="relative bg-gray-50 py-12">
      {/* Background Image with Transparent Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          opacity: 0.3, // Slight transparency for the background
          zIndex: -1,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 lg:flex lg:items-center lg:space-x-12">
          {/* Lawyer Image */}
          <div className="flex-shrink-0">
            <img
              src="https://djapm3nee907g.cloudfront.net/Pd3KmGYAY5X9pIvy3n721Y7rkp93/nmq5getg__805ce672-7ee3-42d7-bba6-6842092653e0___l0___001"
              alt="Lawyer"
              className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-200 ease-out"
            />
          </div>

          {/* Lawyer Info */}
          <div className="mt-6 lg:mt-0 lg:w-3/4">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Steven Slavitt
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
              Specializing in criminal defense, personal injury, landlord
              tenant, family law
            </p>
            {/* Call to Action Button */}
            <div className="mt-6">
              <a
                href="#contact"
                className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
              >
                Contact Steven Slavitt
              </a>
            </div>
          </div>
        </div>

        {/* Expanded Bio Section */}
        <div className="mt-16 bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            About Steven Slavitt
          </h2>
          <div className="mt-6 text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              Prosecutor of 30 years, and private lawyer for 10 years handling
              criminal defense, personal injury including car accidents, slip
              and fall, wrongful death, etc.
            </p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div
          id="contact"
          className="mt-16 bg-gray-900 text-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-center">
            Contact Information
          </h3>
          <p className="mt-4 text-lg text-center">Steven Slavitt</p>
          <p className="text-lg text-center">
            Lilia at 2380 Kuhio Ave, Honolulu, HI 96815.
          </p>
          <p className="text-lg text-center">(808) 824-2833</p>
          <p className="text-lg text-center">Justlawyer108@gmail.com</p>

          {/* CTA Footer */}
          <div className="mt-8 text-center">
            <a
              href="mailto:Justlawyer108@gmail.com"
              className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
