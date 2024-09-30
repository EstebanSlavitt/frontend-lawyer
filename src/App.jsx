import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { LawyersPage } from "./LawyersPage";
import { SignupPage } from "./SignupPage"; // Add if this exists
import { LoginPage } from "./LoginPage"; // Add if this exists

// Define routes
const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <LawyersPage />, // Main page with lawyers
      },
      {
        path: "/signup",
        element: <SignupPage />, // Sign up page
      },
      {
        path: "/login",
        element: <LoginPage />, // Login page
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
