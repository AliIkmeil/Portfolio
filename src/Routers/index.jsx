import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import WashMyRide from "../Components/AllProjects/WashMyRide";
import KhalekBdarak from "../Components/AllProjects/KhalekBdarak";
import AboutMe from "../Components/AboutMe/AboutMe";
import Game from "../Components/Game/Game";
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
        children:[
          
      {
        path: "washMyRide",
        element: <WashMyRide />,
      },
      { path: "khalekBdarak", 
      element: <KhalekBdarak />
      }
        ]
      },
      {
        path: "/washMyRide",
        element: <WashMyRide />,
      },
      { path: "/aboutme", 
      element: <AboutMe />
      },,
      { path: "/skills", 
      element: <Skills />
      },
    ],
},
{ path: "/game", 
element: <Game />
},
]);
