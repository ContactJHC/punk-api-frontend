import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Beer from "./pages/Beer/Beer";
import NotFound from "./components/NotFound/NotFound"
// import AboutUs from "./pages/AboutUs/AboutUs";
import { Outlet } from "react-router-dom";

export const routes = 
[
    {
        path: "/",
        element: <Layout />,
        children: [
          { 
              index: true, 
              element: <Home /> 
          },
          {
            path: "punk-api-frontend",
            element: <Home />,
          },
          {
            path: "beer-card/:id",
            element: <Beer />,
          },
          // {
          //   path: "apropos",
          //   element: <AboutUs />,
          // },
          { 
              path: "*", 
              element: <NotFound /> 
          },
        ],
      },
]

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
  }