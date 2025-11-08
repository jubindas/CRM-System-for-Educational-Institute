import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Districts from "./pages/Districts";
import Brances from "./pages/Brances";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import BranchApplications from "./pages/BranceApplications";
import StudentApplication from "./pages/StudentApplication";
import SubAdmins from "./pages/SubAdmins";
import StudentsApplicationEnquiry from "./sub-admin-page/StudentsApplicationEnquiry";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "districts",
        element: <Districts />,
      },
      {
        path: "brances",
        element: <Brances />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "review-applications",
        element: <BranchApplications />,
      },
      {
        path: "enquiry-form",
        element: <StudentApplication />,
      },
      {
        path: "sub-admin",
        element: <SubAdmins />,
      },
      {
        path: "student-form-enquiry",
        element: <StudentsApplicationEnquiry />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
