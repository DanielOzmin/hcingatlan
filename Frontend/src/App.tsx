import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomeScreen from "./Routes/HomeScreen"
import Properties from "./Routes/Properties"
import Team from "./Routes/Team"
import Gallery from "./Routes/Gallery"
import AboutUs from "./Routes/About_Us"
import Contact from "./Routes/Contact"
import Reviews from "./Routes/Reviews"
import Careers from "./Routes/Careers"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>
  },
  {
    path: "/properties",
    element: <Properties/>
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/reviews",
    element: <Reviews/>
  },
  {
    path: "/careers",
    element: <Careers/>
  },
])

function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
