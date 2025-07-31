export function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Steven Slavitt
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Experienced lawyer specializing in criminal and civil law, dedicated
            to providing expert legal services for over 40 years.
          </p>

          <p className="mt-8 text-2xl font-bold text-blue-700 leading-8">
            Injured in an Accident? <br className="hidden sm:inline" />
            <span className="underline decoration-blue-500 decoration-2">
              We’ve Got Your Back!
            </span>
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We specialize in helping injury victims get the justice and
            compensation they deserve after auto accidents, Uber and Lyft
            crashes, dog bites, and workplace injuries. Whether you were a
            rideshare passenger, driver, or another motorist affected, we know
            the complexities these cases bring. With years of experience
            handling bodily injury and workers’ compensation claims, we
            understand the challenges you face—and we’re here to make the
            process easier.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-20 bg-gray-50 rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h3>

          <div className="space-y-4 text-center text-gray-700">
            <div>
              <p className="font-semibold text-lg">Steven Slavitt, Esq.</p>
              <p className="text-sm text-gray-500">
                Criminal & Civil Defense Attorney
              </p>
            </div>

            <div>
              <p className="text-base">
                <strong>Office Address:</strong>
                <br />
                Lilia, 2380 Kuhio Ave
                <br />
                Honolulu, HI 96815
              </p>
            </div>

            <div>
              <p className="text-base">
                <strong>Phone:</strong> (808) 824-2833
              </p>
              <p className="text-base">
                <strong>Email:</strong> Justlawyer108@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Education Section with Floating Image */}
        <div className="mt-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Office environment"
              className="w-64 h-64 object-cover mr-6 mb-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                <p className="text-lg text-gray-500">
                  <strong>J.D., 1983</strong> – University of California,
                  Berkeley (“Boalt Hall”)
                </p>
                <p className="text-lg text-gray-500">
                  <strong>Masters in Psychology, 1982</strong> – University of
                  Southern California (“USC”)
                </p>
                <p className="text-lg text-gray-500">
                  <strong>Bachelor of Arts, 1979</strong> – University of
                  California, Los Angeles (“UCLA”)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section with Floating Image */}
        <div className="mt-20 relative overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center">
            <div className="lg:mr-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Experience
              </h3>

              <div className="mt-4 space-y-12">
                {/* Private Practice */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Private Practice
                  </h4>
                  <p className="text-lg text-gray-500">
                    August 2017–May 2018; December 2018–present
                  </p>
                  <ul className="mt-2 list-disc list-inside text-lg text-gray-500">
                    <li>
                      Criminal defense handling various felony and misdemeanor
                      cases.
                    </li>
                    <li>
                      Civil cases including divorce, child custody, business
                      disputes, and landlord-tenant issues.
                    </li>
                    <li>Civil cases including personal injury.</li>
                  </ul>
                </div>

                {/* Prosecutor’s Office Hawaii */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Prosecutor’s Office Hawaii
                  </h4>
                  <p className="text-lg text-gray-500">
                    July 2016–August 2017; June 2018–November 2018
                  </p>
                  <ul className="mt-2 list-disc list-inside text-lg text-gray-500">
                    <li>
                      Prosecuted various felony cases and domestic violence
                      misdemeanors.
                    </li>
                    <li>Handled criminal appeals.</li>
                  </ul>
                </div>

                {/* Los Angeles County District Attorney */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Los Angeles County District Attorney
                  </h4>
                  <p className="text-lg text-gray-500">July 1987–April 2015</p>
                  <ul className="mt-2 list-disc list-inside text-lg text-gray-500">
                    <li>
                      Tried over 75 felony jury trials, including 16 murders.
                    </li>
                    <li>
                      Supervised and trained DDAs on trial tactics and complex
                      case management.
                    </li>
                    <li>
                      Collaborated with law enforcement and social workers to
                      build strong cases.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Books and scales of justice"
              className="w-64 h-64 object-cover mb-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Final Section with Floating Image for Organic Flow */}
        <div className="mt-20 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <img
              src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Lawyer in office"
              className="w-64 h-64 object-cover mr-6 mb-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Client Commitment
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Steven Slavitt takes pride in delivering compassionate,
                results-driven representation for every client. Whether it’s a
                complex trial or a simple consultation, his dedication to
                justice and personalized attention make all the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
