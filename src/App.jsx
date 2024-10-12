import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { CasesPage } from "./CasesPage"; // Correctly referencing the Cases page

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
      { path: "/", element: <HomePage /> }, // Home page
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/about", element: <AboutPage /> }, // About page
      { path: "/cases", element: <CasesPage /> }, // Cases page
    ],
  },
  // Optional: Add a 404 page for unmatched routes
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
