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
    <main className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Lawyer Bio Section */}
        <div className="flex items-center justify-center flex-col text-center">
          <img
            src="/IMG_0459 copy.jpeg" // Make sure this image is inside the public folder
            alt="Lawyer"
            className="rounded-lg shadow-lg w-48 h-48 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mt-6">Steven Slavitt</h1>
          <p className="text-lg text-gray-600 mt-4">
            Experienced lawyer specializing in corporate and civil law, committed to delivering justice and providing
            expert legal services to clients.
          </p>
        </div>

        {/* Additional bio information */}
        {lawyer && (
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-900">About Steven Slavitt</h2>
            <p className="mt-6 text-lg text-gray-700">
              Steven has extensive experience in both corporate and civil law, handling numerous complex cases across
              various fields. His practice areas include criminal defense, civil disputes, family law, and corporate
              legal services.
            </p>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
              <p className="mt-4 text-lg text-gray-500">1391 Kapiolani Blvd., Suite 4311, Honolulu, HI 96814</p>
              <p className="text-lg text-gray-500">(808) 824-2833</p>
              <p className="text-lg text-gray-500">Justlawyer108@gmail.com</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
