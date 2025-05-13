import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  { path: "/about",
    element: <About />
  },
  {
    path: "/accommodation/:id",
    element: <Accommodation />
  },
  {
    path: "*",
    element: <Error />
  }
]);


// 'RouterProvider' includes all the routes of the router
// Display the whole app
function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App