import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Index";
import Main from "./Components/Main/Main";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
