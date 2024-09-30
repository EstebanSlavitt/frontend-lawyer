import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage"; // Use HomePage for the homepage
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage"; // Import the About page

// Define routes
const router = createBrowserRouter([
  {
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> }, // Updated to HomePage
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> }, // About page route
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
