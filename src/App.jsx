// import { useState } from "react";
// const [count, setCount] = useState(0);

import { Route, Routes, useLocation } from "react-router-dom";
import "../public/css/styles.css";
import Design from "./_others/Design.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import WorksPage from "./pages/WorksPage.jsx";
import Page1 from "./pages/independent-works/Page1.jsx"; //TODO: learn how to create dynamic pages based on JSON
import Page2 from "./pages/independent-works/Page2.jsx";
import Page3 from "./pages/independent-works/Page3.jsx";
import Page4 from "./pages/independent-works/Page4.jsx";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Design />
      <Navbar />

      <div className="">
        {/* will display contents based on path */}
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            {/* Nested routes */}
            <Route index element={<Home />} /> {/* this is called indexing */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/*
                        you need to index when u next a route
             */}
            <Route path="works">
              <Route index element={<WorksPage />} />
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route path="page4" element={<Page4 />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
