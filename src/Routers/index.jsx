import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe/AboutMe";
import KhalekBdarak from "../Components/AllProjects/KhalekBdarak";
import WashMyRide from "../Components/AllProjects/WashMyRide";
import Game from "../Components/Game/Game";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
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
        children: [
          {
            path: "",
            element: <WashMyRide />,
          },
          {
            path: "khalekBdarak",
            element: <KhalekBdarak />
          }
        ]
      },
      {
        path: "/aboutme",
        element: <AboutMe />
      },
      {
        path: "/skills",
        element: <Skills />
      }
    ]
  },
  {
    path: "/game",
    element: <Game />
  }
]);
