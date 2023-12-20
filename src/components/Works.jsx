import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import apiSearch from "../assets/api-search.png";
import connectCheck from "../assets/connection-checker.png";
import GradientGenerator from "../assets/gradient-generator.png";
import Website from "../assets/website-.png";

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);
  return (
    <>
      <div
        className="relative bg-white container grid grid-cols-12 gap-8"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="col-span-12 md:col-span-6">
          {/*
          
                              Project card 1
          
          
          */}
          <Link to="/works/page1" className="works block relative mb-16 mt-32">
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
          </Link>
          {/* see all button */}
          <div className="flex">
            <Link className="flex items-center font-medium ml-auto" to="/works">
              See all works
              <svg
                className="ml-4"
                width={11}
                height={18}
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.29289 9.00008L0 1.70718L1.41421 0.292969L10.1213 9.00008L1.41421 17.7072L0 16.293L7.29289 9.00008Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
