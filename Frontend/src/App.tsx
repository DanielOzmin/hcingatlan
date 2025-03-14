import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { I18nextProvider } from "react-i18next";

import HomeScreen from "./Routes/HomeScreen"
import Properties from "./Routes/Properties"
import Team from "./Routes/Team"
import Gallery from "./Routes/Gallery"
import AboutUs from "./Routes/About_Us"
import Contact from "./Routes/Contact"
import Reviews from "./Routes/Reviews"
import Careers from "./Routes/Careers"
import PropertyDetails from "./Routes/PropertyDetails"
import Footer from "./Components/Footer/Footer"
import i18n from "./i18n"



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />
  },
  {
    path: "/properties/",
    element: <Properties />,
    children: [
      {
        path: ":details/:id",
        element: <PropertyDetails />
      },
      //{
      //  path: ":details"
      //  element: <FamousProperties/>
      //}
    ]
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/reviews",
    element: <Reviews />
  },
  {
    path: "/careers",
    element: <Careers />
  },
])

function App() {


  return (
    <I18nextProvider i18n={i18n}>
    <div className="app-container">
      <div className="main-content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
    </I18nextProvider>
  )
}

export default App
