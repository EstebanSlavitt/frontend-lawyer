import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-50"></div>
      <img
        alt="Lawyer Background"
        src="https://plus.unsplash.com/premium_photo-1661769577787-9811af17f98d?q=80&w=1353&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
          Steven Slavitt, Lawyer
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 drop-shadow-md">
          Specializing in criminal defense, personal injury, landlord tenant,
          and family law”
        </p>

        {/* Navigation links */}
        <nav className="mt-8">
          <Link to="/" className="text-white hover:underline mx-2">
            Home
          </Link>
          <Link to="/about" className="text-white hover:underline mx-2">
            About
          </Link>
          <Link to="/cases" className="text-white hover:underline mx-2">
            Cases
          </Link>{" "}
          {/* Corrected path */}
        </nav>
      </div>
    </div>
  );
}
