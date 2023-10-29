import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import WashMyRide from "../Components/AllProjects/WashMyRide";
import KhalekBdarak from "../Components/AllProjects/KhalekBdarak";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/washMyRide",
        element: <WashMyRide />,
      },
      { path: "/khalekBdarak", 
      element: <KhalekBdarak />
      },
    ],
  },
]);
