import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Login from "../pages/Home/login/Login";
import Register from "../pages/Home/register/Register";
import Emailverify from "../pages/Home/email/Emailverify";
import Error from "../pages/Error/Error";
import Profile from "../pages/profile/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Emailverify",
        element: <Emailverify />,
      },
      {
        path: "/Error",
        element: <Error />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
