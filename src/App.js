import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* -------------------------------------------------------------------------- */
/*                        IMPORTING PAGES & COMPONENTS                        */
/* -------------------------------------------------------------------------- */
import AllProvider from "./context/AllProvider";
import Footer from "./Screens/Components/Footer/Footer";
import Header from "./Screens/Components/Header/Header";
import PrivateRoute from "./Screens/Components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Screens/Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Screens/Pages/404/NotFound";
import About from "./Screens/Pages/About/About";
import Dentists from "./Screens/Pages/Dentists/Dentists";
import Form from "./Screens/Pages/Form/Form";
import Signin from "./Screens/Pages/Form/Signin/Signin";
import Signup from "./Screens/Pages/Form/Signup/Signup";
import Home from "./Screens/Pages/Home/Home";
import Services from "./Screens/Pages/Services/Services";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 100,
      duration: 900,
      easing: "ease",
    });
  });

  return (
    <div className="main">
      <AllProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* -------------------------------------------------------------------------- */
            /*                                 OPEN ROUTES                                */
            /* -------------------------------------------------------------------------- */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>

            {/* -------------------------------------------------------------------------- */
            /*                               PRIVATE ROUTES                               */
            /* -------------------------------------------------------------------------- */}
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/dentists">
              <Dentists></Dentists>
            </PrivateRoute>

            <Route exact path="/form/signin">
              <Form>
                <Signin></Signin>
              </Form>
            </Route>
            <Route exact path="/form/signup">
              <Form>
                <Signup></Signup>
              </Form>
            </Route>

            {/* -------------------------------------------------------------------------- */
            /*                                  404 ROUTE                                 */
            /* -------------------------------------------------------------------------- */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AllProvider>
    </div>
  );
}

export default App;
