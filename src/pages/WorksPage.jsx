import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// import App from "../_others/App";
import apiSearch from "../assets/api-search.png";
import connectCheck from "../assets/connection-checker.png";
import GradientGenerator from "../assets/gradient-generator.png";
import Website from "../assets/website-.png";

const WorksPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section
        className="pt-8 md:pt-28 pb-8 lg:pb-40"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="container grid grid-cols-12 gap-8">
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8 mb-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeIn",
            }}
          >
            Creating next level digital products
          </motion.h1>
        </div>
        <div className="container grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            {/*
          
                              Project card 1
          
          
          */}
            <Link
              to="/works/page1"
              className="works block relative mb-16 mt-32"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <img className="work-img relative z-0" src={apiSearch} alt="" />
                <div className="bg-white w-10/12 pt-4 pr-4 -mt-24 relative z-10">
                  <p>Personal</p>
                  <h3 className="text-lg lg:text-xl font-medium">
                    Movies Web Search using API
                  </h3>
                </div>
              </motion.div>
            </Link>
            {/*
          
                              Project card 2
          
          
          */}
            <Link to="/works/page2" className="works block relative mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <img
                  className="work-img relative z-0"
                  src={GradientGenerator}
                  alt=""
                />
                <div className="bg-white w-10/12 pt-4 pr-4 -mt-24 relative z-10">
                  <p>Personal</p>
                  <h3 className="text-lg lg:text-xl font-medium">
                    Color Gradient Generator / Picker
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/*
          
                              Project card 3
          
          
          */}
            <Link to="/works/page3" className="works block relative mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <img className="work-img relative z-0" src={Website} alt="" />
                <div className="bg-white w-10/12 pt-4 pr-4 -mt-24 relative z-10">
                  <p>Team</p>
                  <h3 className="text-lg lg:text-xl font-medium">
                    AB Design PH team business website
                  </h3>
                </div>
              </motion.div>
            </Link>
            {/*
          
                              Project card 4
          
          
          */}
            <Link to="/works/page4" className="works block relative mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <img
                  className="work-img relative z-0"
                  src={connectCheck}
                  alt=""
                />
                <div className="bg-white w-10/12 pt-4 pr-4 -mt-24 relative z-10">
                  <p>Personal</p>
                  <h3 className="text-lg lg:text-xl font-medium ">
                    Internet Connection Checker
                  </h3>
                </div>
              </motion.div>
            </Link>{" "}
          </div>
        </div>
      </section>
      {/* <App /> */}
    </>
  );
};

export default WorksPage;
