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
            to providing expert legal services of 40 years. Injured in
            anAccident? We’ve Got Your Back! We specialize in helping injury
            victims get the justice and compensation they deserve after auto
            accidents, Uber and Lyft crashes, dog bites, and workplace injuries.
            Whether you were a rideshare passenger, driver, or another motorist
            affected, we know the complexities these cases bring. With years of
            experience handling bodily injury and workers’ compensation claims,
            we understand the challenges you face—and we’re here to make the
            process easier.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gray-900">
            Contact Information
          </p>
          <p className="mt-4 text-lg text-gray-500">Steven Slavitt</p>
          <p className="text-lg text-gray-500">
            Lilia at 2380 Kuhio Ave, Honolulu, HI 96815
          </p>
          <p className="text-lg text-gray-500">Honolulu, HI 96814</p>
          <p className="text-lg text-gray-500">(808) 824-2833</p>
          <p className="text-lg text-gray-500">Justlawyer108@gmail.com</p>
        </div>

        {/* Education Section with Floating Image */}
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office environment"
            className="float-left w-64 h-64 object-cover mr-6 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
          <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
          <div className="mt-4 space-y-4">
            <p className="text-lg text-gray-500">
              <strong>J.D., 1983</strong> – University of California, Berkeley
              (“Boalt Hall”)
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

        {/* Experience Section with Floating Image */}
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Books and scales of justice"
            className="float-right w-64 h-64 object-cover ml-6 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
          <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>

          <div className="mt-4 space-y-12">
            {/* Private Practice */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Private Practice
              </h4>
              <p className="text-lg text-gray-500">
                August 2017-May 2018; December 2018-present
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
                <li>civil cases including personal injury</li>
              </ul>
            </div>

            {/* Prosecutor’s Office Hawaii */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Prosecutor’s Office Hawaii
              </h4>
              <p className="text-lg text-gray-500">
                July 2016-August 2017; June 2018-November 2018
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
              <p className="text-lg text-gray-500">July 1987-April 2015</p>
              <ul className="mt-2 list-disc list-inside text-lg text-gray-500">
                <li>Tried over 75 felony jury trials, including 16 murders.</li>
                <li>
                  Supervised and trained DDAs on trial tactics and complex case
                  management.
                </li>
                <li>
                  Collaborated with law enforcement and social workers to build
                  strong cases.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Floating Image in Experience Section */}
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lawyer in office"
            className="float-left w-64 h-64 object-cover mr-6 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
